import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-XXXXXXXXXX"; // Replace with your Google Analytics Measurement ID

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "United Flooring NJ | Tile, Stone & Hardwood Installation | Monmouth & Ocean County",
  description:
    "United Flooring NJ provides expert tile, porcelain, marble, granite, stone and hardwood flooring installation in Monmouth and Ocean County. Kitchen and bathroom renovations, floor sanding and finishing. Licensed & insured. Call 908-907-2998.",
  keywords:
    "flooring installation NJ, tile installation New Jersey, bathroom remodel Monmouth County, kitchen renovation Ocean County, hardwood floor installation, marble tile, porcelain tile, granite installation, stone flooring, floor sanding, concrete pavers, West Long Branch flooring, United Flooring",
  authors: [{ name: "United Flooring NJ" }],
  openGraph: {
    title: "United Flooring NJ | Expert Tile, Stone & Hardwood Installation",
    description:
      "Professional flooring installation and renovation services in Monmouth & Ocean County, NJ. Tile, marble, granite, hardwood, concrete and pavers. Licensed & insured.",
    type: "website",
    url: "https://unitedflooringnj.com",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://unitedflooringnj.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "United Flooring",
              alternateName: "United Tile and Stone",
              description:
                "Professional flooring, tile, stone and hardwood installation services. Complete kitchen and bathroom renovations.",
              url: "https://unitedflooringnj.com",
              telephone: "+1-908-907-2998",
              email: "junior@unitedflooringnj.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "36 Victor Ave",
                addressLocality: "West Long Branch",
                addressRegion: "NJ",
                postalCode: "07764",
                addressCountry: "US",
              },
              areaServed: [
                {
                  "@type": "County",
                  name: "Monmouth County",
                  containedInPlace: { "@type": "State", name: "New Jersey" },
                },
                {
                  "@type": "County",
                  name: "Ocean County",
                  containedInPlace: { "@type": "State", name: "New Jersey" },
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Flooring Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Porcelain Tile Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marble Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Granite Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stone Flooring" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardwood Floor Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Floor Sanding and Finishing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Renovation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete and Pavers" } },
                ],
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
