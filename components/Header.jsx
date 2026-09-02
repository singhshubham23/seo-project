"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/best-mechanical-keyboard-under-2000", label: "Top Picks" },
  { href: "/best-gaming-keyboard-under-2000", label: "Gaming" },
  { href: "/best-wireless-mechanical-keyboard-under-2000", label: "Wireless" },
  { href: "/mechanical-vs-membrane-keyboard", label: "Mech vs Membrane" },
  { href: "/red-vs-blue-vs-brown-switches", label: "Switch Guide" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-slate-950/40 py-2.5"
          : "bg-slate-950/95 backdrop-blur-sm border-b border-slate-800/50 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-white font-bold text-xl tracking-tight transition-transform active:scale-95"
            id="site-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all">
              ⌨️
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-lg">
                Keyboard<span className="text-amber-400 font-black">Pick</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
                Under ₹2,000
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/best-mechanical-keyboard-under-2000"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Explore Deals</span>
              <span className="bg-slate-950/20 text-slate-950 text-[10px] px-1.5 py-0.5 rounded-full uppercase">
                2026
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors border border-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            id="mobile-menu-button"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl animate-in slide-in-from-top duration-200"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? "bg-amber-500 text-slate-950"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/best-mechanical-keyboard-under-2000"
                className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-2.5 rounded-xl text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Best Keyboards Under ₹2,000 🔥
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
