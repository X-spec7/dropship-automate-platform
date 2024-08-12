import { ScrollUp } from "@/components/Common";
import { AboutSectionOne, AboutSectionTwo, Blog, Brands, Contact, Features, Hero, Pricing, Testimonials, Video } from "@/components/LandingPage";
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
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
