import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about machine learning and artificial intelligence applications"
    },
    {
      icon: Code,
      title: "Python Expert",
      description: "Advanced proficiency in Python with experience in multiple frameworks"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Enjoys tackling complex challenges with innovative solutions"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and professional growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated B.Tech student in Computer Science Engineering with a specialization in 
              Artificial Intelligence at Parul University. My journey in technology is driven by a 
              passion for creating intelligent solutions that make a real-world impact. With strong 
              foundations in Python programming and machine learning, I'm committed to pushing the 
              boundaries of what's possible with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-lift border-0 card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};