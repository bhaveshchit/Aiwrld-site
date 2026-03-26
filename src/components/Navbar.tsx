import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center transition-transform group-hover:scale-95">
            <span className="material-symbols-outlined text-on-primary text-xl">architecture</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">Aiwrld</span>
        </Link>
        <div className="hidden md:flex flex-1"></div>
        <Link to="/" className="hidden md:flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 text-sm font-medium hover:bg-on-background transition-colors">
          Start Building
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
