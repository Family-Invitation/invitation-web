import Navbar from "@/components/landing-page/Navbar";
import Header from "@/components/landing-page/Header";
import "./globals.css";
import WhyChooseUs from "@/components/landing-page/WhyChooseUs";
import InvitationTheme from "@/components/landing-page/InvitationTheme";
import OurFeature from "@/components/landing-page/OurFeature";
import InvitationHistory from "@/components/landing-page/InvitationHistory";
import Faq from "@/components/landing-page/Faq";
import Footer from "@/components/landing-page/Footer";
import Wrapper from "@/components/Wrapper";

// import Testimoni from "@/components/Testimoni";
// import Faq from "@/components/Faq";
// import Footer from "@/components/Footer";

export default function Page() {
  return (
    <Wrapper>
      <Header />
      <WhyChooseUs />
      <InvitationTheme />
      <OurFeature />
      <InvitationHistory />
      <Faq />
    </Wrapper>
  );
}
