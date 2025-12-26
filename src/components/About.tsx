import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { icon: 'Users', label: 'Профорг группы М561', description: 'Организация и координация студенческой жизни' },
    { icon: 'Award', label: 'Член профкома', description: 'Активное участие в работе профсоюза' },
    { icon: 'Calendar', label: 'Организатор мероприятий', description: 'Разработка и проведение студенческих событий' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-heading text-center">
            Обо мне
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed text-center">
                Я являюсь профоргом группы М561 и активным членом профкома. 
                Принимаю участие в разработке и осуществлении различных мероприятий, 
                направленных на улучшение студенческой жизни и развитие нашего университетского сообщества.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-none shadow-lg hover-scale">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name={achievement.icon as any} size={32} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-dark mb-2">{achievement.label}</div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
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