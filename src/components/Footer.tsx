"use client";

import { Language, translations } from "@/lib/translations";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <p className="font-serif text-2xl font-bold">Andreas Kaffka</p>
              <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mt-1">
                Steuerberater
              </p>
            </div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="tel:0330321830"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03303 218300
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">
              {lang === "de" ? "Kanzlei" : "Office"}
            </p>
            <address className="not-italic text-white/60 text-sm leading-relaxed space-y-1">
              <p>Birkenwerderstr. 37b</p>
              <p>16562 Hohen Neuendorf</p>
              <p className="pt-2">
                <a href="tel:0330321830" className="hover:text-white transition-colors">
                  Tel: 03303 218300
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} {t.copyright}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors text-xs"
            >
              {t.imprint}
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors text-xs"
            >
              {t.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
