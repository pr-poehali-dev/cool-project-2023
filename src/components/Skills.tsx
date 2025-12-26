import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / TypeScript', level: 95 },
        { name: 'HTML / CSS / Tailwind', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / FastAPI', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 80 },
        { name: 'REST API / GraphQL', level: 85 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker / CI/CD', level: 80 },
        { name: 'AWS / Cloud Services', level: 75 },
        { name: 'Testing (Jest, Cypress)', level: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-heading text-center">
            Навыки
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-dark mb-6 font-heading">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-accent">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
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

export default Skills;
