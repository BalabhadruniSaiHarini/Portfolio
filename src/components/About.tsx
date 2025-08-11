import React from 'react';
import { GraduationCap, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8 animate-slide-in-left" data-aos="fade-right">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3 animate-bounce-subtle" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    10th Grade
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Sri Annapurna CBSE High School - Mandapeta</p>
                  <p className="text-gray-600 dark:text-gray-400">2020</p>
                  <div className="mt-2 flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      Percentage: 95%
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Diploma in ECE
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Aditya Polytechnic College - Surampalem</p>
                  <p className="text-gray-600 dark:text-gray-400">2020 - 2023</p>
                  <div className="mt-2 flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      Percentage: 94%
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    BTech in Electronics & Communication Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Aditya Engineering College</p>
                  <p className="text-gray-600 dark:text-gray-400">2023 - 2026</p>
                  <div className="mt-2 flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      CGPA: 8.71/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 text-green-600 mr-3 animate-pulse">💪</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Strengths</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">
                {[
                  { name: 'Team Collaboration', emoji: '🤝' },
                  { name: 'Communication', emoji: '💬' },
                  { name: 'Adaptability', emoji: '🔄' },
                  { name: 'Detail-Oriented', emoji: '🔍' },
                  { name: 'Self-Driven', emoji: '⚡' },
                  { name: 'Time Management', emoji: '⏰' },
                  { name: 'Critical Thinking', emoji: '🧠' },
                  { name: 'Problem Solving', emoji: '🔧' },
                  { name: 'Leadership Potential', emoji: '👑' },
                  { name: 'Continuous Learning', emoji: '📚' },
                  { name: 'Innovation Mindset', emoji: '💡' },
                  { name: 'Quality Focus', emoji: '✨' }
                ].map((strength, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-stagger text-center group"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <span className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">{strength.emoji}</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-tight px-1">{strength.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-8 animate-slide-in-right" data-aos="fade-left">
            {/* Progress Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in-up">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8.71</div>
                <div className="text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in-up">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">9+</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-600 mr-3 animate-spin-slow" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Career Objective</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                A passionate and motivated Electronics graduate seeking an entry-level position in 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> VLSI Design Verification</span>. 
                Eager to contribute to semiconductor innovation using my skills in 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> SystemVerilog, UVM, Verilog</span>, 
                and scripting, along with a strong foundation in digital design concepts and verification methodologies.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {[
                'Strong foundation in VLSI Design & Verification',
                'Proficient in SystemVerilog and UVM',
                'Experience with industry-standard tools',
                'Passionate about semiconductor innovation'
              ].map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-stagger"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;