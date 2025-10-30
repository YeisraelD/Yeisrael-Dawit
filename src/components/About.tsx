import { Card } from "./ui/card";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and design patterns.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive, accessible interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all devices.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I specialize in React, Node.js, and modern web technologies, always staying up-to-date with 
            the latest industry trends and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card key={item.title} className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3>{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
