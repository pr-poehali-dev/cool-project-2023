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
              Добро пожаловать
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Моё портфолио
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Профорг группы М561, активный участник студенческой жизни и общественных мероприятий
          </p>

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8"
            >
              Связаться
            </Button>
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