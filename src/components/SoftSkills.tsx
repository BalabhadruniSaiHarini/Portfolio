import React from 'react';
import { Users, Lightbulb, Target, MessageCircle, Clock, Zap } from 'lucide-react';

const SoftSkills: React.FC = () => {
  const softSkills = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Excellent teamwork abilities with experience in cross-functional project collaboration and peer learning.',
      color: 'blue'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Communication',
      description: 'Strong verbal and written communication skills, able to explain complex technical concepts clearly.',
      color: 'green'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Adaptability',
      description: 'Quick to learn and adapt to new technologies, methodologies, and changing project requirements.',
      color: 'purple'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Detail-Oriented',
      description: 'Meticulous attention to detail in design verification, debugging, and quality assurance processes.',
      color: 'orange'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Self-Driven',
      description: 'Proactive approach to learning and problem-solving with strong self-motivation and initiative.',
      color: 'red'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Management',
      description: 'Efficient project planning and execution with ability to meet deadlines while maintaining quality.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Soft Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Essential interpersonal and professional skills that complement technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(skill.color)} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getColorClasses(skill.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Additional Soft Skills */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            Additional Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Critical Thinking', 'Problem Solving', 'Leadership Potential',
              'Continuous Learning', 'Innovation Mindset', 'Quality Focus',
              'Analytical Skills', 'Project Management', 'Mentoring'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;