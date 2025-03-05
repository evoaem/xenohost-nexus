
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PricingPlans from "../components/PricingPlans";
import CustomVpsOptions from "../components/CustomVpsOptions";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PricingPlans />
        <CustomVpsOptions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
