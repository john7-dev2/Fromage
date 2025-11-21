import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-brand-green rounded-3xl p-6 shadow-2xl transform -rotate-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop"
                    alt="Fresh healthy food"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>

            {/* Right - Newsletter Form */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                Subscribe Newsletter & Get Latest News
              </h2>
              <p className="text-muted-foreground">
                Get exclusive access to seasonal menus and special offers from our talented home chefs.
              </p>

              {/* Email Input */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-border bg-white focus:outline-none focus:border-primary transition-colors"
                />
                <Button 
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
