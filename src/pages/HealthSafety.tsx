import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Thermometer, Droplet, Users, Award } from "lucide-react";

const safetyMeasures = [
  {
    icon: Shield,
    title: "Kitchen Certification",
    description: "All our home chefs' kitchens are inspected and certified to meet professional hygiene standards.",
    color: "bg-primary"
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Strict temperature monitoring during cooking and delivery to ensure food safety.",
    color: "bg-accent"
  },
  {
    icon: Droplet,
    title: "Sanitization",
    description: "Regular deep cleaning and sanitization of all cooking areas and equipment.",
    color: "bg-brand-orange"
  },
  {
    icon: Users,
    title: "Chef Training",
    description: "Comprehensive food safety and hygiene training for all our partner chefs.",
    color: "bg-brand-purple"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular quality checks and customer feedback monitoring to maintain high standards.",
    color: "bg-accent"
  },
  {
    icon: CheckCircle,
    title: "Contactless Delivery",
    description: "Safe, contactless delivery options to protect both you and our delivery partners.",
    color: "bg-primary"
  }
];

const standards = [
  "Fresh ingredients sourced daily from trusted suppliers",
  "No artificial preservatives or harmful additives",
  "Allergen information clearly labeled on all dishes",
  "Tamper-proof packaging for all orders",
  "Regular health inspections and compliance checks",
  "24/7 customer support for any concerns"
];

const HealthSafety = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-6xl md:text-7xl font-serif mb-6">
              Health & Safety
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Your health and safety are our top priorities. We maintain the highest 
              standards of hygiene and food safety across all our partner kitchens.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-foreground">
              Our Commitment to You
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Fromage, we believe that great food should never compromise on safety. 
              Every pizza that reaches your table has been prepared with care, following 
              strict hygiene protocols and quality standards.
            </p>
          </div>

          {/* Safety Measures Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {safetyMeasures.map((measure, idx) => {
              const Icon = measure.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 ${measure.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {measure.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {measure.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kitchen Standards */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-accent rounded-3xl p-8 shadow-2xl transform -rotate-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=600&fit=crop"
                    alt="Professional chef cooking"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-xl transform rotate-6 w-48">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-accent" />
                </div>
              </div>
            </div>

            {/* Right - Standards List */}
            <div className="space-y-6">
              <h2 className="text-5xl font-serif text-foreground">
                Our Standards
              </h2>
              <p className="text-lg text-muted-foreground">
                Every kitchen in our network adheres to these essential standards:
              </p>
              <ul className="space-y-4">
                {standards.map((standard, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-serif mb-4">
                Certified & Trusted
              </h2>
              <p className="text-xl opacity-90 mb-8">
                All our partner chefs are certified in food safety and hygiene practices. 
                We conduct regular audits to ensure compliance with local health regulations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="font-semibold">FSSAI Certified</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="font-semibold">ISO Compliant</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="font-semibold">Regular Audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-serif mb-6 text-foreground">
              Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to address any concerns about food safety and hygiene. 
              Your trust is important to us.
            </p>
            <button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthSafety;
