import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Heart, TrendingUp, Users } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for an experienced full stack developer to join our growing team and work on cutting-edge web applications.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our design team to create beautiful, intuitive user interfaces that delight our clients and their users.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us build and maintain robust infrastructure and CI/CD pipelines for our enterprise clients.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
    },
    {
      title: "Mobile Developer (iOS/Android)",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop high-quality mobile applications for iOS and Android platforms using modern technologies.",
      skills: ["React Native", "Swift", "Kotlin", "Mobile UI/UX", "REST APIs"],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, and vision coverage for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities, training programs, and clear career advancement paths.",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented, passionate professionals in a collaborative and supportive environment.",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous paid time off.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology. Explore exciting career opportunities at Infotria Solutions.
          </p>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-2">
                  <CardContent className="pt-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {position.department}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="mb-3">
                    <span className="font-semibold text-sm">Experience Required: </span>
                    <span className="text-sm text-muted-foreground">{position.experience}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm mb-2 block">Key Skills:</span>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're always looking for talented individuals. Send us your resume and let's talk about future opportunities.
              </p>
              <Button size="lg">Submit Your Resume</Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
