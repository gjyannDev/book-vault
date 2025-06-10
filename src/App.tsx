import { Package, Ribbon, Shield, Truck } from "lucide-react";
import NavBar from "./components/layout/NavBar";
import QualityCard from "./components/layout/QualityCard";
import HeroSection from "./components/layout/HeroSection";

const quality_cards = [
  {
    icon: Truck,
    title: "Quick Delivery",
    description: "We deliver your favorite books straight to your doorstep",
  },
  {
    icon: Ribbon,
    title: "Best Quality",
    description:
      "Premium picks with crisp pages, sturdy binding, and stunning covers.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payments are protected by industry-standard encryption.",
  },
  {
    icon: Package,
    title: "Return Guarantee",
    description: "100% Money Back Guarantee",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <HeroSection />
        <QualityCard cardDetails={quality_cards} />
      </div>
    </>
  );
}

export default App;
