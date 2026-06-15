"use client";

import { useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navigation({ lang, setLang }: NavigationProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t.services },
    { href: "#about", label: t.about },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight group">
            <span className="font-serif text-lg font-bold text-forest-700 group-hover:text-forest-600 transition-colors">
              Andreas Kaffka
            </span>
            <span className="text-xs text-gold-600 tracking-widest uppercase font-medium">
              Steuerberater
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-forest-700 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-forest-700 transition-colors border border-gray-300 rounded-full px-3 py-1 hover:border-forest-400"
            >
              <span className={lang === "de" ? "text-forest-700 font-semibold" : ""}>DE</span>
              <span className="text-gray-300">/</span>
              <span className={lang === "en" ? "text-forest-700 font-semibold" : ""}>EN</span>
            </button>

            <a
              href="#contact"
              className="bg-forest-700 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest-600 transition-colors"
            >
              {t.cta}
            </a>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="text-xs font-medium text-gray-600 border border-gray-300 rounded-full px-2.5 py-1"
            >
              {lang === "de" ? "EN" : "DE"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700"
              aria-label="Menu"
            >
              <div className="w-6 space-y-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-warm-50 border-t border-gray-100 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-forest-700"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-forest-700 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest-600 transition-colors"
              >
                {t.cta}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
