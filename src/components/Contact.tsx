import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["GROUND FLOOR, C-106, Block C", "Lajpat Nagar I, Lajpat Nagar", "Delhi, India 110024"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["Dine-in • Delivery • Takeaway", "Order your favorite pizza today"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Monday - Sunday", "11:00 AM - 11:00 PM"],
  },
  {
    icon: Instagram,
    title: "Follow Us",
    details: ["@fromage.delhi", "1,069 followers"],
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Find Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Come visit us or get it delivered to your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-none bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-xl font-semibold text-foreground mb-2">
              Lajpat Nagar, Delhi
            </p>
            <p className="text-muted-foreground">
              C-106, Block C, Lajpat Nagar I
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
