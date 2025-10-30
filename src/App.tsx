import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Project } from "./components/types";
import { Toaster } from "./components/ui/sonner";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart management, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1OTM4MTczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization. Features custom reporting and export capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5MzgzMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "D3.js", "TypeScript", "REST API"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and project tracking features.",
    image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU5NDIzMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "MongoDB", "Socket.io", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "4",
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for workout tracking, nutrition planning, and progress monitoring with social features.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5Mzg5MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using GPT API. Supports multiple content types with customizable parameters and templates.",
    image: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5MzUzOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "OpenAI", "Node.js", "Express"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "6",
    title: "Property Listing Platform",
    description: "Real estate platform with advanced search filters, map integration, and virtual tour capabilities. Includes agent dashboard.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTk0MjMzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Mapbox", "PostgreSQL", "AWS"],
    link: "https://example.com",
    github: "https://github.com",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique challenge and learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <Skills />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
