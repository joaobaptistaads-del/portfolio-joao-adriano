import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} João Adriano. All rights reserved.</span>
        <div className="flex gap-6">
          {navLinks.slice(0, 4).map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
