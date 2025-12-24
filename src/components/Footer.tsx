import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} SkipIt Digital. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact Us</Link>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
        </nav>
      </div>
    </footer>
  );
}