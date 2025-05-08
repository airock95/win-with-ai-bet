
import Hero from "@/components/Hero";
import CustomizeSection from "@/components/CustomizeSection";
import PredictionsSection from "@/components/PredictionsSection";
import BankrollSection from "@/components/BankrollSection";
import SecuritySection from "@/components/SecuritySection";
import ComparisonSection from "@/components/ComparisonSection";
import AISection from "@/components/AISection";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CustomizeSection />
      <PredictionsSection />
      <BankrollSection />
      <SecuritySection />
      <ComparisonSection />
      <AISection />
      <FaqSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
