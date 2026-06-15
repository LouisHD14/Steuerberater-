"use client";

import Image from "next/image";
import { Language, translations } from "@/lib/translations";
import { UserCheck, Zap, MapPin, Laptop } from "lucide-react";

interface BenefitsProps {
  lang: Language;
}

const icons = [UserCheck, Zap, MapPin, Laptop];

export default function Benefits({ lang }: BenefitsProps) {
  const t = translations[lang].benefits;

  return (
    <section className="py-24 md:py-32 bg-forest-700 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70"
          alt="Office background"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            {t.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t.headline}
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="flex gap-5 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-gold-400 transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5"
          >
            {lang === "de" ? "Kostenloses Erstgespräch" : "Free Initial Consultation"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
