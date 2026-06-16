import { useRef } from "react";
import { Sparkles, LayoutDashboard, FileText, ShieldAlert } from "lucide-react";
import FeatureCard from "./FeatureCard";
import DashboardFrame from "./DashboardFrame";

const features = [{
  icon: <Sparkles size={24} />,
  title: "AI-driven forecasting",
  description: "Leverage machine learning to predict trends and optimize your financial strategy."
}, {
  icon: <LayoutDashboard size={24} />,
  title: "Unified dashboard",
  description: "Access all your financial data in one centralized, intuitive interface."
}, {
  icon: <FileText size={24} />,
  title: "Automated reporting",
  description: "Generate comprehensive reports automatically, saving time and reducing errors."
}, {
  icon: <ShieldAlert size={24} />,
  title: "Risk detection",
  description: "Identify potential risks early with intelligent monitoring and alerts."
}];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="features-section" ref={sectionRef} className="section flex flex-col items-center gap-10">
      {/* Dashboard UI Frame */}
      <DashboardFrame 
        className="w-full tablet:w-[83%] max-w-[1079px]" 
        sectionRef={sectionRef}
        animateOnLoad
      />

      {/* Feature Cards */}
      <div className="w-full grid grid-cols-1 gap-3 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-[20px]">
        {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />)}
      </div>
    </section>
  );
};

export default FeaturesSection;
