import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PHC Conference 2026 - Nourish to Flourish",
  description: "Celebrating 10 years of helping people nourish to flourish. Join us for the premier metabolic health conference on May 16-17, 2026 in London.",
  keywords: "PHC, metabolic health, nutrition, conference, London, 2026, health conference",
  openGraph: {
    title: "PHC Conference 2026 - Nourish to Flourish",
    description: "Join us for 2 days of world-class speakers and 16 CPD points",
    type: "website",
    url: "https://phcconference.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
