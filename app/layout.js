import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/data/site";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-display" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [{ url: "/TE.png", type: "image/png" }],
    shortcut: ["/TE.png"],
    apple: [{ url: "/TE.png", type: "image/png" }]
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ["Mumbai", "Maharashtra"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN"
    }
  };

  return (
    <html lang="en" className={`${newsreader.variable} ${jakarta.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZVZV2D0SP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZVZV2D0SP');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
