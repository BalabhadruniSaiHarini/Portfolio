import React from 'react';
import { Code, Cpu, Settings, GitBranch, Terminal, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Languages & HDLs',
      skills: [
        { name: 'System Verilog', level: 90 },
        { name: 'Verilog', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'Python', level: 75 },
      ],
      color: 'blue'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Verification & Tools',
      skills: [
        { name: 'UVM', level: 85 },
        { name: 'Cadence', level: 80 },
        { name: 'Xilinx Vivado', level: 75 },
        { name: 'MATLAB', level: 70 },
      ],
      color: 'purple'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Protocols & Interfaces',
      skills: [
        { name: 'AMBA (AXI, AHB)', level: 80 },
        { name: 'UART', level: 85 },
        { name: 'I2C', level: 75 },
        { name: 'SPI', level: 75 },
      ],
      color: 'green'
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Development Tools',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Linux', level: 75 },
        { name: 'Arduino IDE', level: 85 },
        { name: 'Debugging Tools', level: 80 },
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise in VLSI design, verification methodologies, and modern development tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} text-white mr-4 hover:scale-110 transition-transform duration-200`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-1000 ease-out animate-progress-bar`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Perl Scripting', 'Pspice', 'TASM', 'MASM', 'Waveform Analysis',
              'Digital Design', 'FPGA Programming', 'PCB Design', 'Embedded Systems'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-200 animate-fade-in-stagger"
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

export default Skills;