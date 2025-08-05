import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
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
      details: "Within 24 hours",
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
            and drive sustainable growth for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to explore how we can help you achieve 
                your operational and strategic objectives.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
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
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-elegant">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Start Your Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        className="mt-2"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-foreground">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your company name" 
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@company.com" 
                        className="mt-2"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (805) 760-6682" 
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project-type" className="text-foreground">Project Type</Label>
                    <select 
                      id="project-type" 
                      className="w-full mt-2 px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select project type</option>
                      <option value="reservoir">Reservoir Engineering</option>
                      <option value="economics">Economic Analysis</option>
                      <option value="operations">Operations Optimization</option>
                      <option value="compliance">Regulatory Compliance</option>
                      <option value="digital">Digital Transformation</option>
                      <option value="evaluation">Asset Evaluation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full" type="submit">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;