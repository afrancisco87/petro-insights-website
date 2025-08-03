import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-oil-gas.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Oil and gas industry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl">
          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-accent" />
              <span>Enterprise-Scale Analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span>Organizational Integration</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Strategic{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Oil & Gas
            </span>{" "}
            Consulting
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Unlock operational excellence and maximize returns with data-driven insights 
            from industry veterans who understand the energy sector's complexities.
          </p>

          {/* Value Proposition */}
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-border shadow-elegant">
            <p className="text-lg font-semibold text-foreground mb-3">
              Transform Your Operations With Expert Analysis
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Reservoir optimization and production enhancement strategies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Risk assessment and regulatory compliance frameworks
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Digital transformation and technology integration
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="hero" size="lg" className="animate-pulse-glow" asChild>
              <a href="#contact" className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float hidden lg:block">
        <div className="w-16 h-16 bg-accent rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 right-20 opacity-10 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-energy-blue rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;