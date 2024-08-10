import { Breadcrumb } from "@/components/Common";
import { Contact } from "@/components/LandingPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Fully Automated Dropshipping Platform",
  description: "This is Contact Page for Our Automated Dropshipping Platform",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
