import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-none">
                <span className="block text-foreground">Authentic</span>
                <span className="block text-foreground italic relative">
                  Food
                  <svg className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                    <circle cx="35" cy="45" r="3" fill="currentColor" className="text-foreground"/>
                    <circle cx="65" cy="45" r="3" fill="currentColor" className="text-foreground"/>
                    <path d="M 35 65 Q 50 75 65 65" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
                  </svg>
                </span>
              </h1>
              <h2 className="text-5xl md:text-6xl font-serif text-foreground">
                Dishes
              </h2>
            </div>

            {/* Decorative Circle with Text */}
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-32 rounded-full border-2 border-foreground flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs font-medium leading-tight">
                    PREPARED WITH LOVE FOR YOU
                  </p>
                </div>
              </div>
              <div className="w-16 h-0.5 bg-foreground"></div>
            </div>
          </div>

          {/* Right Content - Food Images */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative bg-brand-purple rounded-3xl p-8 shadow-2xl transform rotate-3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop"
                  alt="Delicious pasta dish"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>

            {/* Secondary Image Card */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 w-48">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
                alt="Fresh salad"
                className="w-full h-full object-cover aspect-square rounded-xl"
              />
            </div>

            {/* Text Card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm font-serif italic text-foreground">
                Authentic Dishes From Home Kitchens In Your Area
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
