const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Natya Career Academy",
  url: "https://www.natyacareeracademy.com/",
  logo: "https://www.natyacareeracademy.com/assets/images/logo.png",
  description:
    "Premier performing arts institute in Kerala offering offline and online Indian classical dance diploma courses and PG programs.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "C M Mathew Brothers Arcade, Near Westway Hotel, Kannur Road, Chakkorathukulam, Nadakkave",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673006",
    addressCountry: "IN",
  },
  telephone: "+91-7559861455",
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}