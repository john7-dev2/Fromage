import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-serif mb-6 text-foreground">
              About Pizzetta Bella
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Artisan Italian Pizzeria in Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-brand-purple rounded-3xl p-8 shadow-2xl transform rotate-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop"
                    alt="Delicious pizza"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-xl transform -rotate-6 w-48">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
                  alt="Fresh salad"
                  className="w-full h-full object-cover aspect-square rounded-xl"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-5xl font-serif text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Pizzetta Bella, we bring the authentic flavors of Naples to Mumbai. Our journey 
                  began with a simple passion: to create the perfect pizza using time-honored 
                  Italian techniques and the finest ingredients.
                </p>
                <p>
                  Located in the vibrant Phoenix Market City, we've built our reputation on 
                  authenticity. Our dough is made fresh daily using imported Italian flour, 
                  fermented for 48 hours, and baked in our custom-built wood-fired oven at 485°C.
                </p>
                <p>
                  Every ingredient tells a story—from San Marzano tomatoes grown in volcanic soil 
                  to buffalo mozzarella from Campania. Our chefs, trained in Naples, bring decades 
                  of expertise to every pizza. We don't just serve food; we share a piece of Italian culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">15K+</div>
              <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
              <p className="text-muted-foreground">
                Satisfied pizza lovers served since 2018
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">25+</div>
              <h3 className="text-xl font-semibold mb-2">Artisan Pizzas</h3>
              <p className="text-muted-foreground">
                Handcrafted varieties using authentic recipes
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-orange mb-4">485°C</div>
              <h3 className="text-xl font-semibold mb-2">Wood-Fired Oven</h3>
              <p className="text-muted-foreground">
                Perfect temperature for authentic Neapolitan pizza
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif text-center mb-12 text-foreground">
              Visit Us
            </h2>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        Shop 12, Phoenix Market City<br />
                        Kurla West<br />
                        Mumbai, Maharashtra 400070
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hours</h3>
                      <p className="text-muted-foreground">
                        Mon-Sun: 12:00 PM - 11:00 PM<br />
                        Dine-in • Delivery • Takeaway
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contact</h3>
                      <p className="text-muted-foreground">
                        Phone: +91 98765 43210<br />
                        Email: hello@pizzettabella.com<br />
                        Instagram: @pizzettabella.mumbai
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl mb-4">📍</div>
                    <p className="text-lg font-semibold text-foreground">Find us here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
