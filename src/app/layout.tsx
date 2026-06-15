import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andreas Kaffka – Steuerberater in Hohen Neuendorf",
  description:
    "Persönliche Steuerberatung für Privatpersonen und Unternehmen in Hohen Neuendorf und Umgebung. Jetzt kostenloses Erstgespräch vereinbaren.",
  keywords: [
    "Steuerberater Hohen Neuendorf",
    "Steuerberatung Bergfelde",
    "Steuererklärung",
    "Andreas Kaffka",
    "Buchhaltung",
    "Jahresabschluss",
  ],
  openGraph: {
    title: "Andreas Kaffka – Steuerberater in Hohen Neuendorf",
    description:
      "Persönliche Steuerberatung mit Herz und Verstand. Kostenloses Erstgespräch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
