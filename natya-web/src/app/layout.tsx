import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Natya Career Academy | Dance Diploma Courses & Performing Arts Institute Kerala",
  description:
    "Join Natya Career Academy in Kozhikode, Kerala. Offering Indian classical dance diploma courses, PG programs, and professional performing arts training at our premier institute.",
  metadataBase: new URL("https://www.natyacareeracademy.com"),

  openGraph: {
    title:
      "Natya Career Academy | Online & Offline Classical Dance Diploma Courses",
    description:
      "Premier performing arts institute in Kerala offering certified classical dance diploma courses online & offline.",
    images: [
      {
        url: "/assets/images/og-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Natya Career Academy Online and Offline Classical Dance Diploma Courses",
      },
    ],
    url: "/",
    siteName: "Natya Career Academy",
    locale: "en_IN",
    type: "website",
  },

  other: {
    "google-site-verification":
      "LBg15oQ5PAXEICfM6AjEOWjW79GU-hH-jhA5xPeaUN4",
  },

  twitter: {
    card: "summary_large_image",
    title: "Natya Career Academy | Online & Offline Classical Dance Diploma Courses",
    description: "Premier performing arts institute in Kerala offering certified classical dance diploma courses online & offline.",
    images: ["/assets/images/og-banner.jpeg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K8S6Z2LN" />
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900 overflow-x-hidden selection:bg-rose-500 selection:text-white`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8S6Z2LN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Noise />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
