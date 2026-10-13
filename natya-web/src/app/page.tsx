
import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title:
    "Natya Career Academy | Dance Diploma Courses & Performing Arts Institute Kerala",
  description:
    "Join Natya Career Academy in Kozhikode, Kerala. Offering Indian classical dance diploma courses, PG programs, and professional performing arts training at our premier institute.",
  alternates: {
    canonical: "https://www.natyacareeracademy.com/",
  },
  openGraph: {
    title:
      "Natya Career Academy | Dance Diploma Courses & Performing Arts Institute",
    description:
      "Premier performing arts institute in Kerala offering certified classical dance diploma courses.",
    images: [
      "https://www.natyacareeracademy.com/assets/images/og-banner.jpeg",
    ],
    url: "https://www.natyacareeracademy.com/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
