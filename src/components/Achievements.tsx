import React from 'react';
import { Trophy, Users, Calendar } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      year: '2024',
      title: 'Project Space Participation',
      organization: 'Technical Hub, Surampalem',
      description: 'Active participation in advanced VLSI design and verification projects, collaborating with industry experts and peers.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'blue'
    },
    {
      year: '2023-Present',
      title: 'NSS Club Membership',
      organization: 'Aditya Engineering College',
      description: 'Contributing to community service initiatives while developing leadership and teamwork skills.',
      icon: <Users className="w-6 h-6" />,
      color: 'green'
    },
    {
      year: '2024',
      title: 'Academic Excellence',
      organization: 'Electronics & Communication Engineering',
      description: 'Maintaining consistent academic performance with CGPA of 8.71/10 throughout the program.',
      icon: <Calendar className="w-6 h-6" />,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-300 dark:border-blue-600'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-300 dark:border-green-600'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-300 dark:border-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and involvement in academic and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {achievements.map((achievement, index) => {
              const colorClasses = getColorClasses(achievement.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-aos={isEven ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 200}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${colorClasses.bg} ${colorClasses.text}`}>
                        {achievement.year}
                      </div>

                      {/* Icon and Title */}
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.text} mr-3`}>
                          {achievement.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {achievement.title}
                        </h3>
                      </div>

                      {/* Organization */}
                      <p className={`font-medium mb-3 ${colorClasses.text}`}>
                        {achievement.organization}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">9+</div>
            <div className="text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">8.71</div>
            <div className="text-gray-600 dark:text-gray-400">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;