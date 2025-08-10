import React from 'react';
import { Building, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

interface Internship {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  status: 'completed' | 'ongoing' | 'upcoming';
}

const Internships: React.FC = () => {
  const internships: Internship[] = [
    {
      id: 1,
      company: 'Technical Hub',
      position: 'VLSI Design Verification Intern',
      duration: 'June 2024 - August 2024',
      location: 'Surampalem, AP',
      type: 'Summer Internship',
      description: 'Gained hands-on experience in VLSI design verification methodologies and industry-standard tools.',
      responsibilities: [
        'Developed testbenches using SystemVerilog and UVM',
        'Performed functional verification of digital IP blocks',
        'Analyzed coverage reports and improved test scenarios'
      ],
      technologies: ['SystemVerilog', 'UVM', 'Cadence Tools', 'Verilog', 'Python'],
      achievements: [
        'Achieved 95% functional coverage on assigned IP blocks',
        'Identified and reported 12 critical design bugs',
        'Reduced verification time by 20% through optimized testbenches'
      ],
      status: 'completed'
    },
    {
      id: 2,
      company: 'Semiconductor Innovations Ltd',
      position: 'Digital Design Intern',
      duration: 'December 2024 - February 2025',
      location: 'Bangalore, India',
      type: 'Winter Internship',
      description: 'Working on advanced digital design projects and FPGA implementation of complex algorithms.',
      responsibilities: [
        'Design and implement digital circuits using Verilog HDL',
        'FPGA prototyping and validation of designs',
        'Performance optimization and timing analysis',
        'Documentation of design specifications and test results'
      ],
      technologies: ['Verilog', 'FPGA', 'Xilinx Vivado', 'MATLAB', 'C++'],
      achievements: [
        'Successfully implemented complex DSP algorithms on FPGA',
        'Optimized design for 30% better resource utilization',
        'Contributed to patent application for novel design approach',
        'Mentored junior interns on FPGA programming'
      ],
      status: 'ongoing'
    },
    {
      id: 3,
      company: 'Future Electronics Research',
      position: 'Research Intern - AI Hardware',
      duration: 'May 2025 - July 2025',
      location: 'Chennai, India',
      type: 'Research Internship',
      description: 'Upcoming research internship focusing on AI accelerator design and neuromorphic computing.',
      responsibilities: [
        'Research on AI hardware acceleration techniques',
        'Design of neural network processing units',
        'Performance analysis of neuromorphic architectures',
        'Collaboration with academic research teams'
      ],
      technologies: ['SystemVerilog', 'Python', 'TensorFlow', 'Cadence', 'Machine Learning'],
      achievements: [
        'Selected from 500+ applicants nationwide',
        'Research proposal accepted for implementation',
        'Opportunity to work with leading AI hardware experts',
        'Potential for research publication'
      ],
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      ongoing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      upcoming: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
    };
    return colors[status as keyof typeof colors];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Award className="w-4 h-4" />;
      case 'ongoing':
        return <Calendar className="w-4 h-4" />;
      case 'upcoming':
        return <MapPin className="w-4 h-4" />;
      default:
        return <Building className="w-4 h-4" />;
    }
  };

  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-slide-down">
            Internships & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-expand"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-delay">
            Practical experience in VLSI design, verification, and cutting-edge semiconductor technologies
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-stagger"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white animate-pulse-subtle">
                      <Building className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        {internship.position}
                      </h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        {internship.company}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{internship.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(internship.status)} animate-bounce-in`}>
                      {getStatusIcon(internship.status)}
                      <span className="ml-1 capitalize">{internship.status}</span>
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      {internship.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed animate-fade-in-up">
                  {internship.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div className="animate-slide-in-left">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {internship.responsibilities.map((responsibility, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start animate-fade-in-stagger hover:translate-x-2 transition-transform duration-200"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="animate-slide-in-right">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start animate-fade-in-stagger hover:translate-x-2 transition-transform duration-200"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 animate-fade-in-up">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 animate-bounce-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-count-up">3</div>
            <div className="text-gray-600 dark:text-gray-400">Internships</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 animate-count-up">6+</div>
            <div className="text-gray-600 dark:text-gray-400">Months Experience</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2 animate-count-up">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;