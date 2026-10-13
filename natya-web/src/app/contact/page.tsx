import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Natya Career Academy | Dance Institute Near Me in Kozhikode",
    description:
        "Get in touch with Natya Career Academy at Nadakkave, Kozhikode for admissions to classical dance diploma courses. Call +91 755 986 1455.",
    alternates: {
        canonical: "https://www.natyacareeracademy.com/contact",
    },
    openGraph: {
        title: "Contact Natya Career Academy | Dance Institute Near Me in Kozhikode",
        description:
            "Get in touch with Natya Career Academy in Kozhikode, Kerala, for course and admission enquiries.",
        url: "https://www.natyacareeracademy.com/contact",
        siteName: "Natya Career Academy",
        type: "website",
        locale: "en_IN",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}