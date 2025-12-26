import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'ivan.petrov@example.com',
      link: 'mailto:ivan.petrov@example.com'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: 'MapPin',
      title: 'Локация',
      value: 'Москва, Россия',
      link: null
    },
  ];

  const socialLinks = [
    { icon: 'Github', label: 'GitHub', url: 'https://github.com' },
    { icon: 'Linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'Twitter', label: 'Twitter', url: 'https://twitter.com' },
    { icon: 'Mail', label: 'Email', url: 'mailto:ivan.petrov@example.com' },
  ];

  return (
    <section id="contact" className="py-24 bg-dark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-center">
            Контакты
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Открыт для новых проектов и сотрудничества. Свяжитесь со мной любым удобным способом.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover-scale">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name={method.icon as any} size={28} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">{method.title}</div>
                    {method.link ? (
                      <a 
                        href={method.link}
                        className="text-white hover:text-accent transition-colors font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium">{method.value}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-8">
            <div className="flex gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.label}
                >
                  <div className="w-14 h-14 bg-white/5 hover:bg-accent border border-white/10 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                    <Icon name={social.icon as any} size={24} className="text-white" />
                  </div>
                </a>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12"
              onClick={() => window.location.href = 'mailto:ivan.petrov@example.com'}
            >
              Написать письмо
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2024 Иван Петров. Все права защищены.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
