import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Agency for Scalable Growth | SkipIt Digital",
  description: "SkipIt Digital is an AI-driven digital marketing agency helping brands scale with Google Ads, Meta Ads, SEO, and SaaS growth strategies. Get results, faster.",
  metadataBase: new URL('https://skipitdigital.com'),
  openGraph: {
    title: "AI-Powered Digital Marketing Agency | SkipIt Digital",
    description: "Scale your business with AI-driven ads, SEO, and growth strategies.",
    url: 'https://skipitdigital.com',
    siteName: 'SkipIt Digital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SkipIt Digital | AI Marketing Agency",
    description: "Scale with AI-driven Google Ads, Meta Ads, and SEO.",
  },

  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SkipIt Digital',
  image: 'https://skipitdigital.com/icon.png',
  '@id': 'https://skipitdigital.com',
  url: 'https://skipitdigital.com',
  telephone: '', // Add phone number if available
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chennai',
    addressLocality: 'Chennai',
    addressRegion: 'TN',
    postalCode: '600001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0827,
    longitude: 80.2707
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: '09:00',
    closes: '18:00'
  }
};

import Navbar from "@/components/Navbar";
import ChennaiPopup from "@/components/ChennaiPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b1020] text-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQ29B23H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NQ29B23H');`}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <ChennaiPopup />
      </body>
    </html>
  );
}
