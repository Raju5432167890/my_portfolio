import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering (AI)",
      institution: "Parul University",
      period: "2022 - 2026",
      grade: "CGPA: 6.15",
      status: "Pursuing",
      description: "Specialized in Artificial Intelligence with focus on machine learning, deep learning, and intelligent systems."
    },
    {
      degree: "Intermediate (MPC)",
      institution: "GOVT Jr College",
      period: "2020 - 2022",
      grade: "54.60%",
      status: "Completed",
      description: "Mathematics, Physics, and Chemistry foundation for engineering studies."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "ZP High School",
      period: "2019 - 2020",
      grade: "90.00%",
      status: "Completed",
      description: "Strong academic foundation with excellent performance in core subjects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift border-0 card-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <Badge 
                          variant={edu.status === "Pursuing" ? "default" : "secondary"}
                          className="w-fit"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <span className="text-lg font-medium text-primary">{edu.grade}</span>
                      </div>
                      
                      <p className="text-muted-foreground">{edu.description}</p>
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