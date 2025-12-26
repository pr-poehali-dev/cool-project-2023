import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;