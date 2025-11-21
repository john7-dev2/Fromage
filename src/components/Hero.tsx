import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-pizza.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            <span className="inline-block bg-primary px-8 py-4 rounded-2xl shadow-2xl transform -rotate-2">
              Fromage
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-secondary mb-4 font-light tracking-wide">
            Authentic Italian Pizza in Delhi
          </p>
          <p className="text-lg md:text-xl text-secondary/90 mb-12 max-w-2xl mx-auto">
            Handcrafted pizzas with love, fresh ingredients, and traditional recipes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-secondary/10 backdrop-blur-sm border-secondary text-secondary hover:bg-secondary hover:text-foreground text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              View Menu
            </Button>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-secondary">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">Lajpat Nagar, Delhi</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">Dine-in • Delivery • Takeaway</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
