"use client";

import Image from "next/image";
import { Language, translations } from "@/lib/translations";
import { CheckCircle } from "lucide-react";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-50/60 via-warm-50 to-gold-50/30 pointer-events-none" />

      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-forest-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gold-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-forest-700/10 text-forest-700 text-sm font-medium px-4 py-1.5 rounded-full border border-forest-200">
              <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
              {t.badge}
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                {t.headline1}
                <br />
                <span className="text-forest-700">{t.headline2}</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              {t.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-forest-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-forest-600 transition-all duration-200 shadow-lg shadow-forest-900/20 hover:shadow-xl hover:shadow-forest-900/25 hover:-translate-y-0.5"
              >
                {t.cta1}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-forest-700 text-forest-700 font-semibold px-8 py-4 rounded-full hover:bg-forest-700 hover:text-white transition-all duration-200"
              >
                {t.cta2}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {[t.trust1, t.trust2, t.trust3].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-forest-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:h-[580px] h-[360px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Steuerberater Andreas Kaffka im Gespräch"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center shrink-0">
                  <span className="text-white font-serif font-bold text-sm">AK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Andreas Kaffka</p>
                  <p className="text-xs text-gold-600 font-medium">
                    {lang === "de" ? "Steuerberater · Hohen Neuendorf" : "Tax Advisor · Hohen Neuendorf"}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <div className="flex gap-0.5 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {lang === "de" ? "Exzellente Bewertungen" : "Excellent reviews"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
