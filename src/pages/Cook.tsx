import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChefHat, DollarSign, Calendar, TrendingUp, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Extra Income",
    description: "Turn your passion for cooking into a profitable side business. Set your own prices and work on your schedule.",
    color: "bg-accent"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Cook when you want, as much as you want. Perfect for stay-at-home parents, retirees, or anyone with spare time.",
    color: "bg-brand-orange"
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Connect with food lovers in your neighborhood and share your culinary heritage and traditions.",
    color: "bg-primary"
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Start small and scale up. We provide tools and support to help you succeed and grow your customer base.",
    color: "bg-brand-purple"
  },
  {
    icon: Heart,
    title: "Share Your Passion",
    description: "Bring joy to others through your cooking. Make a difference in your community one meal at a time.",
    color: "bg-accent"
  },
  {
    icon: ChefHat,
    title: "Professional Support",
    description: "Get access to training, resources, and a dedicated support team to help you every step of the way.",
    color: "bg-primary"
  }
];

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill out our simple application form and tell us about your cooking experience and specialties."
  },
  {
    number: "02",
    title: "Kitchen Inspection",
    description: "Our team will visit your kitchen to ensure it meets our health and safety standards."
  },
  {
    number: "03",
    title: "Training & Setup",
    description: "Complete our onboarding program and set up your profile with photos and menu items."
  },
  {
    number: "04",
    title: "Start Cooking",
    description: "Begin accepting orders and start earning! We'll handle payments, delivery, and customer support."
  }
];

const Cook = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-orange to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-10 h-10 text-brand-orange" />
            </div>
            <h1 className="text-6xl md:text-7xl font-serif mb-6">
              Join Our Team
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Become part of the Fromage family. Share your culinary talents and 
              passion for authentic Italian cuisine with our community.
            </p>
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-brand-orange rounded-full px-12 py-6 text-lg font-semibold shadow-xl"
            >
              Become a Chef Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-foreground">
              Why Join Fromage?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our team of passionate chefs and be part of creating authentic Italian experiences.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 ${benefit.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting started is easy. Follow these simple steps to begin your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our chef partners who have transformed their passion into profit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                specialty: "Pizza Chef",
                quote: "Fromage gave me the opportunity to perfect my craft and share authentic Italian flavors. I love being part of this amazing team!",
                image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop"
              },
              {
                name: "Rajesh Kumar",
                specialty: "South Indian Delicacies",
                quote: "The flexibility is amazing. I cook during my free time and the platform handles everything else. Highly recommend!",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop"
              },
              {
                name: "Anjali Verma",
                specialty: "Continental Dishes",
                quote: "Started with just 5 dishes, now I have over 20 items on my menu. The support team is incredible!",
                image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=400&fit=crop"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {story.name}
                </h3>
                <p className="text-primary font-medium mb-4">{story.specialty}</p>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-5xl font-serif mb-6">
              Ready to Start Cooking?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join our team of talented chefs at Fromage. 
              Your culinary journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-primary rounded-full px-12 py-6 text-lg font-semibold shadow-xl"
              >
                Apply Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-12 py-6 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cook;
