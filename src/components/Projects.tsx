import React, { useState } from 'react';
import { ExternalLink, Github, X, Cpu, Car, Glasses } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  features: string[];
  achievements: string[];
  icon: React.ReactNode;
  color: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'FPGA Controlled Automated Coffee Maker',
      description: 'Advanced FPGA-based automation system for coffee preparation with intelligent ingredient control and user interface design.',
      tools: ['System Verilog', 'Cadence', 'Xilinx Vivado', 'FPGA'],
      features: [
        'Finite State Machine (FSM) implementation for brewing control',
        'Precise ingredient measurement and dispensing system',
        'User-friendly interface with customizable brewing options',
        'Temperature and timing control mechanisms',
        'Safety protocols and error handling'
      ],
      achievements: [
        'Successful hardware implementation on FPGA platform',
        'Optimized timing constraints for real-time operation',
        'Reduced brewing time by 30% through efficient FSM design',
        'Implemented robust error detection and recovery mechanisms'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Arduino Based Car Parking System',
      description: 'Intelligent parking management system using Arduino microcontroller with automated vehicle detection and gate control.',
      tools: ['Arduino UNO', 'C/C++', 'Ultrasonic Sensors', 'Servo Motors', 'LCD Display'],
      features: [
        'Real-time vehicle detection using ultrasonic sensors',
        'Automated gate control with servo motor integration',
        'LCD display for parking status and user information',
        'Distance measurement and obstacle detection',
        'Manual override functionality for emergency situations'
      ],
      achievements: [
        'Achieved 99% accuracy in vehicle detection',
        'Implemented smooth gate operation with safety features',
        'Reduced parking time by 40% through automation',
        'Cost-effective solution using readily available components'
      ],
      icon: <Car className="w-8 h-8" />,
      color: 'green'
    },
    {
      id: 3,
      title: 'Accident Prevention Glasses for Drivers',
      description: 'Innovative wearable smart glasses designed to detect driver drowsiness and prevent accidents through real-time monitoring.',
      tools: ['Microcontroller', 'IR Sensors', 'C Programming', 'Low-Power Design'],
      features: [
        'Real-time drowsiness detection using IR sensors',
        'Eye blink pattern analysis and monitoring',
        'Audio and vibration alert systems',
        'Lightweight and comfortable wearable design',
        'Battery optimization for extended usage'
      ],
      achievements: [
        'Developed prototype with 95% drowsiness detection accuracy',
        'Achieved 12-hour battery life through power optimization',
        'Ergonomic design ensuring user comfort during long drives',
        'Integrated multiple alert mechanisms for enhanced safety'
      ],
      icon: <Glasses className="w-8 h-8" />,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-700'
      },
      green: {
        gradient: 'from-green-500 to-green-600',
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-700'
      },
      purple: {
        gradient: 'from-purple-500 to-purple-600',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions in VLSI design, embedded systems, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 overflow-hidden animate-scale-in"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 ${colorClasses.bg} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`p-4 rounded-full bg-gradient-to-r ${colorClasses.gradient} text-white animate-float`}>
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full border ${colorClasses.border}`}
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a href="https://github.com/BalabhadruniSaiHarini/FPGA_Controlled_Automated_Coffee_Maker"> <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex-1 px-4 py-2 bg-gradient-to-r ${colorClasses.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105 transform`}
                    >
                      View Details
                    </button></a>
                    <a href="https://github.com/BalabhadruniSaiHarini/FPGA_Controlled_Automated_Coffee_Maker"> <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 transform">
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;