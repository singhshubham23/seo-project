import Link from "next/link";
import { SITE_NAME } from "@/data/articles";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-bold text-lg tracking-tight">
              <span className="text-xl mr-1" aria-hidden="true">⌨️</span>
              Keyboard<span className="text-amber-400">Pick</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Helping Indian buyers find the best mechanical keyboards under ₹2,000.
              Independent comparisons and buying guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/best-mechanical-keyboard-under-2000"
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Best Mechanical Keyboards
                </Link>
              </li>
              <li>
                <Link
                  href="/best-gaming-keyboard-under-2000"
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Best Gaming Keyboards
                </Link>
              </li>
              <li>
                <Link
                  href="/best-wireless-mechanical-keyboard-under-2000"
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Wireless Keyboards
                </Link>
              </li>
              <li>
                <Link
                  href="/mechanical-vs-membrane-keyboard"
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Mechanical vs Membrane
                </Link>
              </li>
              <li>
                <Link
                  href="/red-vs-blue-vs-brown-switches"
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Switch Types Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> Prices mentioned on this site are indicative and may change.
            Please verify the latest prices on the respective e-commerce platforms before making a purchase.
            Some links on this site may be affiliate links, which means we may earn a small commission
            if you make a purchase through them, at no extra cost to you.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
