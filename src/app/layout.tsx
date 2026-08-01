import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { mapMeta } from "@/content/opportunity-map";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${mapMeta.projectName} | ${mapMeta.preparedBy}`,
  description:
    "Private opportunity map for ADS. Ideas and concepts after digging into the industry.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full bg-bg font-sans text-text antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
