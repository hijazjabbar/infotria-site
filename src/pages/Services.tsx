import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, Globe, Smartphone, Database, Cloud, Lock, 
  Zap, Users, CheckCircle2 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Transform your unique business challenges into powerful software solutions with our custom development services.",
      features: [
        "Enterprise application development",
        "Legacy system modernization",
        "API development and integration",
        "Microservices architecture",
      ],
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Build modern, scalable web applications that deliver exceptional user experiences and drive business growth.",
      features: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce platforms",
        "Content Management Systems",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create engaging mobile experiences with native and cross-platform applications for iOS and Android.",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development (React Native, Flutter)",
        "Mobile UI/UX design",
        "App store optimization",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Design and implement robust database architectures that ensure data integrity, security, and performance.",
      features: [
        "Database design and modeling",
        "Performance optimization",
        "Data migration services",
        "Database administration",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Leverage the power of cloud computing with our comprehensive cloud solutions and migration services.",
      features: [
        "Cloud architecture design",
        "AWS, Azure, and GCP services",
        "Cloud migration and optimization",
        "DevOps and CI/CD implementation",
      ],
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and best practices implementation.",
      features: [
        "Security audits and assessments",
        "Penetration testing",
        "Compliance consulting",
        "Security training and awareness",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development methodology ensures rapid delivery without compromising quality.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with experienced professionals who are passionate about technology.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes guarantee reliable solutions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs, delivered with excellence and innovation.
          </p>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/30 py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Infotria</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <Link to="/consultation">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
