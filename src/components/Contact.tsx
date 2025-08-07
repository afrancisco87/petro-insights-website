import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "consulting@petroinsights.com",
      action: "mailto:consulting@petroinsights.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (805) 760-6682",
      action: "tel:+18057606682"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Bakersfield, CA",
      action: null
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 48 hours",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our expertise can help optimize your operations 
            and drive sustainable growth for your organization. We'll get back to you within 48 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 text-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to explore how we can help you achieve 
                your operational and strategic objectives.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <Card className="p-4 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-accent/30">
                    <CardContent className="p-0 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{item.title}</div>
                        <div className="text-muted-foreground text-sm">{item.details}</div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return item.action ? (
                  <a key={item.title} href={item.action} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}
            </div>

            {/* Quick Benefits */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-md mx-auto">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-4">Why Choose PetroInsights?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    Rapid project mobilization
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    Industry-leading expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    Proven ROI delivery
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}