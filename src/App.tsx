import { Package, Ribbon, Shield, Truck } from "lucide-react";
import CallToActionFooter from "./components/layout/CallToActionFooter";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/layout/HeroSection";
import NavBar from "./components/layout/NavBar";
import QualityCard from "./components/layout/QualityCard";
import ShopCard from "./features/books/components/ShopCard";

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

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
    title: "Atomic Habits",
    price: "₱649.00 PHP",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving every day with small, consistent changes that lead to remarkable results.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    title: "The Lean Startup",
    price: "₱799.00 PHP",
    description:
      "The Lean Startup provides a practical approach to building a successful business by focusing on fast iteration, validated learning, and customer feedback.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
    title:
      "The Evangelists: Insights from Leaders of the Nation's Most Beloved Brands",
    price: "₱729.00 PHP",
    description:
      "Deep Work explains how deep focus is essential in an age of distraction, helping you achieve greater productivity and creative breakthroughs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
    title: "The Psychology of Money",
    price: "₱599.00 PHP",
    description:
      "This book explores the emotional side of finance, showing how our behavior—not just knowledge—shapes the way we earn, save, and invest money.",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <div className="container flex flex-col gap-24 mx-auto px-4 sm:px-8 lg:px-14">
        <HeroSection />
        <QualityCard cardDetails={quality_cards} />
        <div className="featured__books">
          <h1 className="font-playfair-bold text-3xl lg:text-4xl xl:text-5xl">
            Featured Books
          </h1>
          <ShopCard bookInfo={products} variant={"compact"} />
        </div>
        <div className="best__books">
          <h1 className="font-playfair-bold text-3xl lg:text-4xl xl:text-5xl">
            Bestseller Books
          </h1>
          <ShopCard bookInfo={products} variant={"featured"} />
        </div>
      </div>
      <CallToActionFooter />
      <Footer />
    </>
  );
}

export default App;
