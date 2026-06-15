"use client";

import { useState } from "react";
import { Language, translations } from "@/lib/translations";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
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

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-warm-50 rounded-2xl p-8 border border-gray-100 space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-700/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-forest-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {lang === "de" ? "Adresse" : "Address"}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {t.info.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-700/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-forest-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {lang === "de" ? "Telefon" : "Phone"}
                  </p>
                  <a
                    href={`tel:${t.info.phone.replace(/\s/g, "")}`}
                    className="text-forest-700 font-semibold hover:text-forest-600 transition-colors"
                  >
                    {t.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-700/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-forest-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {lang === "de" ? "Öffnungszeiten" : "Office Hours"}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {t.info.hours}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-700/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-forest-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">E-Mail</p>
                  <a
                    href="mailto:info@kaffka-steuerberatung.de"
                    className="text-forest-700 hover:text-forest-600 transition-colors text-sm"
                  >
                    info@kaffka-steuerberatung.de
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.8!2d13.273!3d52.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBirkenwerderstra%C3%9Fe+37b%2C+16540+Hohen+Neuendorf!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanzlei Standort"
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-forest-50 rounded-2xl p-12 border border-forest-100 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-forest-700/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-forest-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    {lang === "de" ? "Vielen Dank!" : "Thank you!"}
                  </h3>
                  <p className="text-gray-600">{t.form.success}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder={lang === "de" ? "Max Mustermann" : "John Doe"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="+49 3303 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.form.message} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-warm-50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>

                <p className="text-xs text-gray-400">{t.form.privacy}</p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest-700 text-white font-semibold py-4 rounded-xl hover:bg-forest-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-forest-900/20 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.form.submitSending}
                    </>
                  ) : (
                    t.form.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
