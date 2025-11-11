import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Foundational Professional Skills",
      issuer: "TCS iON",
      description: "Comprehensive certification covering essential professional skills for the modern workplace.",
      category: "Professional Development",
      icon: "🏢"
    },
    {
      title: "Data Science Certification",
      issuer: "CISCO",
      description: "In-depth certification covering data science fundamentals, analytics, and practical applications.",
      category: "Data Science",
      icon: "📊"
    },
    {
      title: "Internet and Protocol",
      issuer: "NPTEL",
      description: "Technical certification focusing on network protocols, internet architecture, and communication systems.",
      category: "Networking",
      icon: "🌐"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Professional Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Data Science":
        return "bg-green-100 text-green-800 border-green-200";
      case "Networking":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift border-0 card-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                    <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <Badge 
                      variant="secondary" 
                      className={`${getCategoryColor(cert.category)} text-xs`}
                    >
                      {cert.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Continuously pursuing additional certifications to enhance technical expertise and professional development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};