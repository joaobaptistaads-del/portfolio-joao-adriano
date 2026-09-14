"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, QuadraticBezierLine } from "@react-three/drei";
import * as THREE from "three";

const DAY_MAP =
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";
const LIGHTS_MAP =
  "https://threejs.org/examples/textures/planets/earth_lights_2048.png";

// convert lat/lng (deg) to a point on a sphere of given radius
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const RADIUS = 1.6;

const arcs = [
  { from: [40, -74], to: [51, 0] }, // NY -> London
  { from: [51, 0], to: [-23, -46] }, // London -> Sao Paulo
  { from: [-23, -46], to: [35, 139] }, // Sao Paulo -> Tokyo
  { from: [35, 139], to: [1, 103] }, // Tokyo -> Singapore
  { from: [1, 103], to: [40, -74] }, // Singapore -> NY
] as const;

function NetworkArcs() {
  return (
    <>
      {arcs.map((arc, i) => {
        const start = latLngToVector3(arc.from[0], arc.from[1], RADIUS + 0.01);
        const end = latLngToVector3(arc.to[0], arc.to[1], RADIUS + 0.01);
        const mid = start
          .clone()
          .add(end)
          .normalize()
          .multiplyScalar(RADIUS + 0.55);
        return (
          <group key={i}>
            <QuadraticBezierLine
              start={start}
              end={end}
              mid={mid}
              color="#60a5fa"
              lineWidth={1}
              transparent
              opacity={0.55}
              dashed={false}
            />
            <mesh position={start}>
              <sphereGeometry args={[0.018, 8, 8]} />
              <meshBasicMaterial color="#93c5fd" />
            </mesh>
            <mesh position={end}>
              <sphereGeometry args={[0.018, 8, 8]} />
              <meshBasicMaterial color="#93c5fd" />
            </mesh>
          </group>
        );
      })}
    </>
  );
}

function Earth() {
  const groupRef = useRef<THREE.Group>(null);
  const [dayMap, lightsMap] = useLoader(THREE.TextureLoader, [
    DAY_MAP,
    LIGHTS_MAP,
  ]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.09;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={dayMap}
          emissiveMap={lightsMap}
          emissive={new THREE.Color("#8ec5ff")}
          emissiveIntensity={1.4}
          roughness={0.7}
          metalness={0}
        />
      </mesh>

      {/* soft atmosphere glow */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.04, 64, 64]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      <NetworkArcs />
    </group>
  );
}

function OuterRings() {
  const ringGroupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ringGroupRef.current) ringGroupRef.current.rotation.z += delta * 0.06;
  });

  return (
    <group ref={ringGroupRef}>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[RADIUS + 0.55, 0.003, 8, 128]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 2.2, Math.PI / 4, 0]}>
        <torusGeometry args={[RADIUS + 0.8, 0.003, 8, 128]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.18} />
      </mesh>
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 2, 4]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-4, -2, -3]} intensity={0.4} color="#3b82f6" />
        <Stars
          radius={40}
          depth={20}
          count={800}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <OuterRings />
      </Canvas>
    </div>
  );
}

