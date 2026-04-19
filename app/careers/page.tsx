import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CareersHero from "@/app/components/sections/CareersHero";
import CareersCulture from "@/app/components/sections/CareersCulture";
import HiringPortal from "@/app/components/sections/HiringPortal";
import ApplicationCTA from "@/app/components/sections/ApplicationCTA";
import TechStackShowcase from "@/app/components/sections/TechStackShowcase";
import LifeAtFynab from "@/app/components/sections/LifeAtFynab";
import HiringProcess from "@/app/components/sections/HiringProcess";
import EmployeeTestimonials from "@/app/components/sections/EmployeeTestimonials";
import PerksAndBenefits from "@/app/components/sections/PerksAndBenefits";
import GlobalPresence from "@/app/components/sections/GlobalPresence";

export const metadata: Metadata = {
  title: "Careers | Fynab - Build the Future with Us",
  description: "Join Fynab and help us redefine the future of IT solutions. Explore open roles in engineering, design, product, and more.",
};

export default function CareersPage() {
  return (
    <main className="bg-[#05070F] min-h-screen selection:bg-indigo-500/30">
      <Header />
      
      <CareersHero />
      <TechStackShowcase />
      <CareersCulture />
      <LifeAtFynab />
      <PerksAndBenefits />
      <HiringPortal />
      <HiringProcess />
      <EmployeeTestimonials />
      <GlobalPresence />
      <ApplicationCTA />
      
      <Footer />
    </main>
  );
}
