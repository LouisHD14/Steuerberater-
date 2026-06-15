"use client";

import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-forest-700/10 -z-10" />
            <div className="relative h-[480px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85"
                alt="Andreas Kaffka, Steuerberater"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
            </div>

            {/* Gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold-500 opacity-20 -z-10" />
          </div>

          {/* Right: Text */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-forest-700 text-sm font-semibold tracking-widest uppercase mb-4 bg-forest-50 px-4 py-1.5 rounded-full border border-forest-100">
                {t.badge}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {t.headline}
              </h2>
              <p className="text-gold-600 font-semibold text-lg">{t.title}</p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold-400 pl-6 py-2">
              <p className="font-serif text-xl text-gray-700 italic leading-relaxed">
                {t.quote}
              </p>
            </blockquote>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t.text1}</p>
              <p>{t.text2}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {[t.stat1, t.stat2, t.stat3].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl font-bold text-forest-700">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-forest-600 transition-all duration-200 shadow-lg shadow-forest-900/20 hover:-translate-y-0.5"
            >
              {lang === "de" ? "Jetzt kennenlernen" : "Get in touch"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
