import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import ContactForm from "~/components/Contacto";
import CTA1 from "~/components/CTA1";
import CTA2 from "~/components/CTA2";
import Facts from "~/components/Facts";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import Services from "~/components/Services";
import TabsMovil from "~/components/ServicesMovil";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <HeroSection />
      <Facts />
      <Services />
      <TabsMovil />
      <CTA1 />
      <CTA2 />
      <ContactForm />
      <Footer />

    </main>
  );
}

