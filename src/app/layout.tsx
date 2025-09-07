import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7XSQ542D02"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Check for analytics consent
            const hasAnalyticsConsent = 
              document.cookie.split(';').some(c => {
                return c.trim().startsWith('cookie-consent-analytics=accepted');
              });
            
            // Only activate GA if user has consented
            window['ga-disable-G-7XSQ542D02'] = !hasAnalyticsConsent;
            
            gtag('config', 'G-7XSQ542D02', {
              send_page_view: hasAnalyticsConsent,
              anonymize_ip: true
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
