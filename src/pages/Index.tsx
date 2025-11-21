import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MenuHighlights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
