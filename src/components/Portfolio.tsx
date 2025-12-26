import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const achievements = [
    {
      icon: 'GraduationCap',
      title: 'Обучение на направлении Метрология',
      description: 'Получаю высшее образование, изучаю точные науки и измерительные технологии',
      period: 'Настоящее время',
      image: 'https://cdn.poehali.dev/projects/22ebbc08-71a7-4c67-b4f5-c9395ae5b370/files/b7c9ea46-87a4-4fc0-925f-76826b925ecd.jpg'
    },
    {
      icon: 'Shield',
      title: 'Кадетский класс',
      description: 'Обучался в кадетском классе, получил дисциплину и навыки командной работы',
      period: 'Школьные годы',
      image: 'https://cdn.poehali.dev/projects/22ebbc08-71a7-4c67-b4f5-c9395ae5b370/files/16767714-108f-40ce-b3fb-5f081e7a0223.jpg'
    },
    {
      icon: 'Flag',
      title: 'Военно-патриотические мероприятия',
      description: 'Активный участник различных военно-патриотических мероприятий и соревнований',
      period: 'Школа и университет',
      image: 'https://cdn.poehali.dev/projects/22ebbc08-71a7-4c67-b4f5-c9395ae5b370/files/c60a6d2b-2b05-410b-bc8b-ef293b20a519.jpg'
    },
    {
      icon: 'Trophy',
      title: 'Спорт',
      description: 'Занимаюсь спортом, участвую в спортивных соревнованиях и поддерживаю здоровый образ жизни',
      period: 'Регулярно',
      image: 'https://cdn.poehali.dev/projects/22ebbc08-71a7-4c67-b4f5-c9395ae5b370/files/064c1e61-87ec-44bb-951a-7559b868656a.jpg'
    },
    {
      icon: 'Users',
      title: 'Общественная деятельность',
      description: 'Профорг группы М561, член профкома, организатор студенческих мероприятий',
      period: 'Университет',
      image: 'https://cdn.poehali.dev/projects/22ebbc08-71a7-4c67-b4f5-c9395ae5b370/files/0169157b-5dad-42f7-adad-853fbdfe2955.jpg'
    },
    {
      icon: 'Star',
      title: 'Лидерские качества',
      description: 'Развиваю лидерские качества через участие в организации и проведении мероприятий',
      period: 'Постоянно',
      image: 'https://cdn.poehali.dev/projects/22ebbc08-71a7-4c67-b4f5-c9395ae5b370/files/5f0559e7-7fe7-4fea-8014-8c9f5c7e94c4.jpg'
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-heading text-center">
            Портфолио
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover-scale overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-accent font-medium">
                        <Icon name="Clock" size={14} />
                        {item.period}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;