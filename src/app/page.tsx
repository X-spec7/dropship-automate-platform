import { AboutSectionOne, AboutSectionTwo, Blog, Brands, Features, Hero, Testimonials, Video } from "@/components/LandingPage";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropshipping Automate Platform",
  description: "This is Dropshipping Automate Platform",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
