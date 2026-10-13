
import type { Metadata } from "next";
import AffiliatedContent from "./AffiliatedContent";

export const metadata: Metadata = {
  title: "Accredited & Affiliated Programs | Natya Career Academy Kozhikode",
  description:
    "Explore affiliated performing arts and classical dance programs at Natya Career Academy in Kozhikode, Kerala.",
  alternates: {
    canonical: "https://www.natyacareeracademy.com/affiliated",
  },
  openGraph: {
    title: "Accredited & Affiliated Programs | Natya Career Academy Kozhikode",
    description:
      "View official academic affiliations, STED Council, and Skill India Mission recognitions for certified diploma courses at Natya Career Academy.",
    url: "https://www.natyacareeracademy.com/affiliated",
    siteName: "Natya Career Academy",
    type: "website",
    locale: "en_IN",
  },
};

export default function AffiliatedPage() {
  return <AffiliatedContent />;
}
