import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { icon: 'Briefcase', label: 'Опыт работы', value: '5+ лет' },
    { icon: 'Code2', label: 'Проектов завершено', value: '50+' },
    { icon: 'Users', label: 'Клиентов', value: '30+' },
    { icon: 'Award', label: 'Сертификатов', value: '12' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-heading text-center">
            О мне
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed">
                Я разработчик с более чем 5-летним опытом создания современных веб-приложений. 
                Специализируюсь на React, TypeScript и Node.js, с глубоким пониманием принципов 
                чистого кода и архитектуры приложений.
              </p>
              <p className="text-xl leading-relaxed">
                Моя цель — создавать продукты, которые не только решают бизнес-задачи, но и 
                обеспечивают превосходный пользовательский опыт. Постоянно изучаю новые технологии 
                и следую лучшим практикам индустрии.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-lg hover-scale">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name={stat.icon as any} size={24} className="text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-dark">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
