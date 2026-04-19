import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import TrustedClients from "./components/sections/TrustedClients";
import Services from "./components/sections/Services";
import Industries from "./components/sections/Industries";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Process from "./components/sections/Process";
import CaseStudy from "./components/sections/CaseStudy";
import TechStack from "./components/sections/TechStack";
import TestimonialsCarousel from "./components/sections/TestimonialsCarousel";
import StatsCounter from "./components/sections/StatsCounter";
import FinalCTA from "./components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedClients />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Process />
        <CaseStudy />
        <TechStack />
        <TestimonialsCarousel />
        <StatsCounter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
