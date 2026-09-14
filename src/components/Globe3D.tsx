"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function ParticleGlobe() {
  const pointsRef = useRef<THREE.Points>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ringGroupRef = useRef<THREE.Group>(null);

  // Fibonacci sphere distribution for an even particle globe
  const positions = useMemo(() => {
    const count = 1600;
    const arr = new Float32Array(count * 3);
    const radius = 1.6;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      arr[i * 3] = x * radius;
      arr[i * 3 + 1] = y * radius;
      arr[i * 3 + 2] = z * radius;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.12;
    if (wireRef.current) wireRef.current.rotation.y -= delta * 0.06;
    if (ringGroupRef.current) ringGroupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#60a5fa"
          size={0.028}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.62, 2]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* glowing atmosphere */}
      <mesh>
        <sphereGeometry args={[1.75, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      <group ref={ringGroupRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.15, 0.004, 8, 128]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.35} />
        </mesh>
        <mesh rotation={[Math.PI / 2.2, Math.PI / 4, 0]}>
          <torusGeometry args={[2.4, 0.004, 8, 128]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
        <Stars
          radius={40}
          depth={20}
          count={800}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />
        <ParticleGlobe />
      </Canvas>
    </div>
  );
}
