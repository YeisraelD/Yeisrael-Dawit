import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-muted-foreground">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl">Yeisrael Dawit</h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground">Software Engineering Student</h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I craft beautiful, functional web applications with modern technologies. 
          Passionate about creating seamless user experiences and clean, maintainable code.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button variant="outline" onClick={() => scrollToSection("contact")}>
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:alex@example.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
}
