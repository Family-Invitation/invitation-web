import Header from "@/components/Header";
import "./globals.css";
import FiturKenyamanan from "@/components/FiturKenyamanan";
import OurJourney from "@/components/OurJourney";
import CoupleGallery from "@/components/CoupleGallery";
import Testimoni from "@/components/Testimoni";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <FiturKenyamanan />
      <OurJourney />
      <CoupleGallery />
      <Testimoni />
      <Faq />
      <Footer />
    </>
  );
}
