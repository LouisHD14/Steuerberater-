export type Language = "de" | "en";

export const translations = {
  de: {
    nav: {
      services: "Leistungen",
      about: "Über mich",
      contact: "Kontakt",
      cta: "Termin anfragen",
    },
    hero: {
      badge: "Steuerberater in Hohen Neuendorf",
      headline1: "Ihre Finanzen.",
      headline2: "Meine Leidenschaft.",
      subheadline:
        "Persönliche Steuerberatung mit Herz und Verstand – für Privatpersonen und Unternehmen in Hohen Neuendorf und Umgebung.",
      cta1: "Kostenloses Erstgespräch",
      cta2: "Leistungen entdecken",
      trust1: "Persönliche Beratung",
      trust2: "Regional verwurzelt",
      trust3: "Verlässlich & diskret",
    },
    services: {
      badge: "Was ich für Sie tue",
      headline: "Meine Leistungen",
      subheadline:
        "Von der Steuererklärung bis zur Unternehmensgründung – ich begleite Sie in allen steuerlichen Fragen.",
      items: [
        {
          title: "Einkommensteuer",
          description:
            "Ich erstelle Ihre Einkommensteuererklärung sorgfältig und finde alle Möglichkeiten, Ihre Steuerlast zu minimieren.",
        },
        {
          title: "Unternehmenssteuer",
          description:
            "Steuerliche Beratung für GmbHs, Einzelunternehmen und Freiberufler – strategisch und vorausschauend.",
        },
        {
          title: "Buchhaltung & Jahresabschluss",
          description:
            "Laufende Buchhaltung und professionelle Jahresabschlüsse – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
        },
        {
          title: "Lohnbuchhaltung",
          description:
            "Ordnungsgemäße Lohnabrechnungen für Ihr Team – pünktlich, korrekt und rechtssicher.",
        },
        {
          title: "Existenzgründung",
          description:
            "Ich begleite Sie von der ersten Idee bis zur Gründung – mit dem richtigen steuerlichen Fundament.",
        },
        {
          title: "Erbschaft- & Schenkungsteuer",
          description:
            "Vermögen klug übergeben: Ich helfe Ihnen, Ihr Erbe steueroptimiert zu planen.",
        },
      ],
    },
    about: {
      badge: "Wer ich bin",
      headline: "Andreas Kaffka",
      title: "Ihr Steuerberater vor Ort",
      quote:
        "\"Gute Steuerberatung ist mehr als Zahlen – sie schafft Sicherheit und Freiheit.\"",
      text1:
        "Seit vielen Jahren bin ich als Steuerberater in Hohen Neuendorf und der Region tätig. Was mich antreibt: echte Menschen, echte Anliegen. Kein anonymes Großkanzlei-Erlebnis, sondern ein vertrauensvoller Partner, der Ihre Situation kennt und versteht.",
      text2:
        "Ob Sie als Arbeitnehmer Ihre erste Steuererklärung machen, ein Unternehmen führen oder Ihren Nachlass planen – ich bin mit Fachkompetenz und persönlichem Engagement für Sie da.",
      stat1: { value: "20+", label: "Jahre Erfahrung" },
      stat2: { value: "500+", label: "Zufriedene Mandanten" },
      stat3: { value: "100%", label: "Persönliche Betreuung" },
    },
    benefits: {
      badge: "Warum Kaffka",
      headline: "Was Sie bei mir bekommen",
      items: [
        {
          title: "Persönlicher Ansprechpartner",
          description:
            "Bei mir sprechen Sie immer direkt mit mir – kein Callcenter, kein Durchstellen.",
        },
        {
          title: "Schnelle Reaktionszeiten",
          description:
            "Ihre Anfragen beantworte ich zeitnah. Denn Ihre Zeit ist wertvoll.",
        },
        {
          title: "Lokal & regional verwurzelt",
          description:
            "Als Steuerberater in Hohen Neuendorf kenne ich die Region und ihre Besonderheiten.",
        },
        {
          title: "Digital & klassisch",
          description:
            "Moderne digitale Prozesse für Effizienz – und persönliche Gespräche, wenn es darauf ankommt.",
        },
      ],
    },
    contact: {
      badge: "Nehmen Sie Kontakt auf",
      headline: "Jetzt Erstgespräch vereinbaren",
      subheadline:
        "Das erste Gespräch ist kostenlos und unverbindlich. Ich freue mich, von Ihnen zu hören.",
      form: {
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer (optional)",
        message: "Ihre Nachricht",
        messagePlaceholder:
          "Wie kann ich Ihnen helfen? Beschreiben Sie kurz Ihr Anliegen...",
        submit: "Nachricht senden",
        submitSending: "Wird gesendet...",
        success:
          "Vielen Dank! Ich melde mich schnellstmöglich bei Ihnen.",
        privacy: "Ihre Daten werden vertraulich behandelt und nicht weitergegeben.",
      },
      info: {
        address: "Birkenwerderstraße 37 B\n16540 Hohen Neuendorf (Bergfelde)",
        phone: "03303 218300",
        hours: "Mo–Fr: 9:00–17:00 Uhr\nTermine auch außerhalb auf Anfrage",
      },
    },
    footer: {
      tagline: "Persönliche Steuerberatung in Hohen Neuendorf",
      imprint: "Impressum",
      privacy: "Datenschutz",
      copyright: "Andreas Kaffka, Steuerberater. Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Book a consultation",
    },
    hero: {
      badge: "Tax Advisor in Hohen Neuendorf",
      headline1: "Your finances.",
      headline2: "My passion.",
      subheadline:
        "Personal tax advisory with heart and expertise – for individuals and businesses in Hohen Neuendorf and the surrounding area.",
      cta1: "Free Initial Consultation",
      cta2: "Discover Services",
      trust1: "Personal Advice",
      trust2: "Locally Rooted",
      trust3: "Reliable & Discreet",
    },
    services: {
      badge: "What I do for you",
      headline: "My Services",
      subheadline:
        "From tax returns to business formation – I guide you through all tax-related matters.",
      items: [
        {
          title: "Income Tax",
          description:
            "I prepare your income tax return carefully and find every opportunity to minimize your tax burden.",
        },
        {
          title: "Corporate Tax",
          description:
            "Tax consulting for GmbHs, sole proprietors and freelancers – strategic and forward-thinking.",
        },
        {
          title: "Accounting & Annual Reports",
          description:
            "Ongoing bookkeeping and professional annual financial statements – so you can focus on your core business.",
        },
        {
          title: "Payroll Accounting",
          description:
            "Proper payroll processing for your team – punctual, accurate and legally compliant.",
        },
        {
          title: "Business Formation",
          description:
            "I guide you from the first idea to founding your business – with the right tax foundation.",
        },
        {
          title: "Inheritance & Gift Tax",
          description:
            "Smart wealth transfer: I help you plan your estate in a tax-optimized way.",
        },
      ],
    },
    about: {
      badge: "Who I am",
      headline: "Andreas Kaffka",
      title: "Your Local Tax Advisor",
      quote:
        '"Good tax advice is more than numbers – it creates security and freedom."',
      text1:
        "For many years I have been working as a tax advisor in Hohen Neuendorf and the surrounding region. What drives me: real people, real concerns. No anonymous big-firm experience, but a trustworthy partner who knows and understands your situation.",
      text2:
        "Whether you're an employee filing your first tax return, running a business, or planning your estate – I'm here for you with expertise and personal commitment.",
      stat1: { value: "20+", label: "Years of Experience" },
      stat2: { value: "500+", label: "Satisfied Clients" },
      stat3: { value: "100%", label: "Personal Service" },
    },
    benefits: {
      badge: "Why Kaffka",
      headline: "What you get with me",
      items: [
        {
          title: "Personal Contact",
          description:
            "You always speak directly with me – no call center, no being passed around.",
        },
        {
          title: "Fast Response Times",
          description:
            "I respond to your inquiries promptly. Because your time is valuable.",
        },
        {
          title: "Locally Rooted",
          description:
            "As a tax advisor in Hohen Neuendorf, I know the region and its particularities.",
        },
        {
          title: "Digital & Traditional",
          description:
            "Modern digital processes for efficiency – and personal conversations when it matters.",
        },
      ],
    },
    contact: {
      badge: "Get in touch",
      headline: "Schedule a Free Consultation",
      subheadline:
        "The first conversation is free and non-binding. I look forward to hearing from you.",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number (optional)",
        message: "Your Message",
        messagePlaceholder:
          "How can I help you? Briefly describe your concern...",
        submit: "Send Message",
        submitSending: "Sending...",
        success: "Thank you! I will get back to you as soon as possible.",
        privacy: "Your data is treated confidentially and will not be shared.",
      },
      info: {
        address: "Birkenwerderstraße 37 B\n16540 Hohen Neuendorf (Bergfelde)",
        phone: "03303 218300",
        hours: "Mon–Fri: 9:00–17:00\nAppointments outside these hours on request",
      },
    },
    footer: {
      tagline: "Personal Tax Advisory in Hohen Neuendorf",
      imprint: "Legal Notice",
      privacy: "Privacy Policy",
      copyright: "Andreas Kaffka, Tax Advisor. All rights reserved.",
    },
  },
};
