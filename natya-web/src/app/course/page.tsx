
import type { Metadata } from "next";
import CourseContent from "./CourseContent";

export const metadata: Metadata = {
  title:
    "Indian Classical Dance Diploma & PG Courses | Dance School Kozhikode",

  description:
    "Explore Indian classical dance diploma courses and postgraduate programs at Natya Career Academy in Kozhikode, Kerala. Discover Bharatanatyam, Mohiniyattam, Kuchipudi, Carnatic music and yoga courses.",

  alternates: {
    canonical: "https://www.natyacareeracademy.com/course",
  },

  openGraph: {
    title:
      "Indian Classical Dance Diploma & PG Courses | Dance School Kozhikode",
    description:
      "Explore classical dance diploma courses and postgraduate programs at Natya Career Academy in Kozhikode, Kerala.",
    url: "https://www.natyacareeracademy.com/course",
    siteName: "Natya Career Academy",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/img/bharatanatyam.png",
        alt: "Classical dance courses at Natya Career Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Indian Classical Dance Diploma & PG Courses | Dance School Kozhikode",
    description:
      "Explore top classical dance PG, diploma, and professional dance courses near you. Certified curriculum in Bharatanatyam, Mohiniyattam, Kuchipudi, and Carnatic music.",
    images: ["/img/bharatanatyam.png"],
  },
};

export default function CoursePage() {
  return <CourseContent />;
}
