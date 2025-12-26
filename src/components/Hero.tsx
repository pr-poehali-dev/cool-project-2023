import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-dark to-accent/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white font-heading tracking-tight">
              Иван Петров
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Full-Stack Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Создаю современные веб-приложения с фокусом на производительность и пользовательский опыт
          </p>

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8"
            >
              Связаться
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Узнать больше
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Icon name="Github" size={28} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Icon name="Linkedin" size={28} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Icon name="Twitter" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
