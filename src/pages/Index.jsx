import Faq from "../components/sections/Faq";
import Team from "../components/sections/Team";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Features from "../components/sections/Features";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import HeroSection from "../components/sections/HeroSection";
import NavbarSection from "../components/sections/NavbarSection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroImgBackground from "../components/sections/HeroImgBackground";
import HowItWorksImage from "../components/sections/HowItWorksImage";
import Numbers from "../components/sections/Numbers";
import Services from "../components/sections/Services";
import AboutSocial from "../components/sections/AboutSocial";
import GoogleMaps from "../components/sections/GoogleMaps";
// import Ofertas from "../components/sections/Ofertas";

export default function Index() {
  return (
    <div>
      <NavbarSection />
      <HeroImgBackground />
      {/* <Ofertas /> */}
      <Features />
      {/* <Services /> */}
      <Numbers />
      <About />
      <AboutSocial />
      <CtaWhatsapp />
      <HowItWorksImage />
      <GoogleMaps />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
