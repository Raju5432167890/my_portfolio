import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Code2, Download } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    try {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'K_Yellaraju_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Resume download failed. Please try again.');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              K. Yellaraju
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 opacity-90">
              Frontend Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Enthusiastic B.Tech student passionate about solving real-world problems 
            using artificial intelligence and cutting-edge software development techniques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={scrollToContact}
              className="transition-bounce hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={downloadResume}
              className="transition-bounce hover:scale-105 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Raju5432167890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/k-yellaraju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://leetcode.com/u/Yellaraju3459/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth"
              >
                <Code2 className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};