import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-lowest pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-xl">architecture</span>
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">Aiwrld</span>
            </Link>
            <p className="text-outline max-w-sm">
              Designing and deploying intelligent systems that scale. We don't just consult; we build the future of your business.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-outline hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-outline hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-outline hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-outline text-sm">© 2024 Aiwrld. All rights reserved.</p>
            <p className="text-primary text-sm font-medium tracking-wide">Powered by Adwrld</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-outline text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-outline text-sm hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
