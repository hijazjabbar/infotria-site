import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Infotria Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A leading software development company dedicated to delivering cutting-edge technology solutions
            that drive business success and innovation.
          </p>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Founded with a vision to bridge the gap between technology and business needs, Infotria Solutions
              has emerged as a trusted partner for organizations seeking digital transformation. Our journey began
              with a simple belief: that technology should empower, not complicate.
            </p>
            <p>
              Today, we're proud to serve clients across various industries, delivering innovative software solutions
              that solve real-world challenges. Our team of experienced developers, designers, and strategists work
              collaboratively to turn your vision into reality.
            </p>
            <p>
              At Infotria, we don't just write code – we craft experiences, build relationships, and create lasting
              value for our clients. Every project is an opportunity to innovate, learn, and exceed expectations.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with innovative, reliable, and scalable software solutions that drive
                    growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the world's most trusted technology partner, recognized for excellence in software
                    development, innovation, and commitment to client success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every line of code, every design decision, and every client interaction.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork, both within our organization and with our clients.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
