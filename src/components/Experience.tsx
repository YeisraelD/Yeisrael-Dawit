import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { Experience as ExperienceType } from "./types";

export function Experience() {
  const experiences: ExperienceType[] = [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of cloud-based SaaS platform serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      current: true,
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and Node.js. Improved application performance by 40% through optimization techniques.",
    },
    {
      id: "3",
      title: "Frontend Developer",
      company: "Creative Studios",
      period: "2018 - 2020",
      description: "Developed interactive user interfaces and implemented pixel-perfect designs. Collaborated with UX team to enhance user experience.",
    },
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      period: "2014 - 2018",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>
        
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5" />
              <h3>Work Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <Card key={exp.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="mb-1">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-muted-foreground whitespace-nowrap">{exp.period}</p>
                      {exp.current && <Badge>Current</Badge>}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5" />
              <h3>Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.degree} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h4 className="mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <p className="text-muted-foreground whitespace-nowrap">{edu.period}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
