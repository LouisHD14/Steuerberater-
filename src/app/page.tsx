"use client";

import { useState } from "react";
import { Language } from "@/lib/translations";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");

  return (
    <main>
      <Navigation lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Benefits lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
