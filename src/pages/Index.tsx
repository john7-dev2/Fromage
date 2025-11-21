import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FindDish from "@/components/FindDish";
import PopularDishes from "@/components/PopularDishes";
import LoveCooking from "@/components/LoveCooking";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FindDish />
      <PopularDishes />
      <LoveCooking />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
