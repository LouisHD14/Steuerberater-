"use client";

import { Language, translations } from "@/lib/translations";
import {
  FileText,
  Building2,
  BookOpen,
  Users,
  Rocket,
  Heart,
} from "lucide-react";

interface ServicesProps {
  lang: Language;
}

const icons = [FileText, Building2, BookOpen, Users, Rocket, Heart];

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-forest-700 text-sm font-semibold tracking-widest uppercase mb-4 bg-forest-50 px-4 py-1.5 rounded-full border border-forest-100">
            {t.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.headline}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{t.subheadline}</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative bg-warm-50 rounded-2xl p-8 border border-gray-100 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-900/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-forest-700/10 flex items-center justify-center mb-6 group-hover:bg-forest-700 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-forest-700 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-600 transition-colors group"
          >
            {lang === "de" ? "Alle Leistungen besprechen" : "Discuss all services"}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
