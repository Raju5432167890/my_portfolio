import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Building2, Code } from "lucide-react";

export const ExperienceSection = () => {
  const projects = [
    {
      title: "Command-Line Calculator",
      description: "Developed a comprehensive calculator application with advanced arithmetic operations and robust input validation system.",
      technologies: ["Python", "Input Validation", "CLI"],
      features: [
        "Basic and advanced arithmetic operations",
        "Error handling and input validation",
        "User-friendly command-line interface"
      ]
    },
    {
      title: "Secure Password Generator",
      description: "Built a security-focused password generation tool using Python's random module with customizable parameters.",
      technologies: ["Python", "Security", "Cryptography"],
      features: [
        "Customizable password length and complexity",
        "Multiple character set options",
        "Secure random generation algorithms"
      ]
    },
    {
      title: "Contact Book Application",
      description: "Created a comprehensive contact management system with persistent data storage and intuitive menu-driven interface.",
      technologies: ["Python", "File Handling", "Data Management"],
      features: [
        "Add, edit, delete contact operations",
        "Search and filter functionality",
        "Persistent file-based storage"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience & Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Internship Header */}
          <Card className="mb-12 border-0 card-shadow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">CodSoft Internship</CardTitle>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>January 2025 - February 2025</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Software Development Internship focusing on Python applications and practical problem-solving
              </p>
            </CardHeader>
          </Card>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift border-0 card-shadow h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Code className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Repository Link */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="transition-bounce hover:scale-105">
              <a 
                href="https://github.com/Raju5432167890/CodSoft-Tasks-Repo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project Repository
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};