import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, description: "Advanced" },
        { name: "JavaScript", level: 70, description: "Intermediate" },
        { name: "C", level: 75, description: "Intermediate" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 85, description: "Advanced" },
        { name: "CSS", level: 80, description: "Advanced" },
        { name: "SQL", level: 75, description: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 80, description: "Advanced" },
        { name: "Flask", level: 75, description: "Intermediate" },
        { name: "Django", level: 70, description: "Intermediate" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85, description: "Advanced" },
        { name: "Linux", level: 80, description: "Advanced" },
        { name: "VS Code", level: 90, description: "Expert" }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-success";
    if (level >= 70) return "bg-primary";
    return "bg-muted";
  };

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-0 card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.description}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground text-right">
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};