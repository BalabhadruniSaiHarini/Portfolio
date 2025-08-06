import React, { useState } from 'react';
import { Award, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: string;
  category: string;
  description: string;
}

const Certifications: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      id: 1,
      name: 'VLSI Design and Verification',
      issuer: 'Technical Hub',
      year: '2024',
      category: 'VLSI',
      description: 'Comprehensive training in VLSI design methodologies and verification techniques'
    },
    {
      id: 2,
      name: 'Semiconductor 101',
      issuer: 'Cadence',
      year: '2024',
      category: 'Semiconductor',
      description: 'Fundamental concepts of semiconductor physics and device operation'
    },
    {
      id: 3,
      name: 'Digital IC Design Fundamentals',
      issuer: 'Cadence',
      year: '2024',
      category: 'IC Design',
      description: 'Core principles of digital integrated circuit design and optimization'
    },
    {
      id: 4,
      name: 'Verilog HDL',
      issuer: 'Cadence',
      year: '2024',
      category: 'HDL',
      description: 'Hardware description language for digital circuit design and simulation'
    },
    {
      id: 5,
      name: 'System Verilog',
      issuer: 'Cadence',
      year: '2024',
      category: 'HDL',
      description: 'Advanced hardware verification language and testbench development'
    },
    {
      id: 6,
      name: 'Digital Hardware Engineering using FPGA',
      issuer: 'Aditya Learning Academy',
      year: '2024',
      category: 'FPGA',
      description: 'Practical FPGA programming and digital hardware implementation'
    },
    {
      id: 7,
      name: 'Advanced C++',
      issuer: 'Spoken Tutorial',
      year: '2024',
      category: 'Programming',
      description: 'Advanced C++ programming concepts and object-oriented design'
    },
    {
      id: 8,
      name: 'PCB Design',
      issuer: 'APSSDC',
      year: '2024',
      category: 'Hardware',
      description: 'Printed circuit board design principles and layout optimization'
    },
    {
      id: 9,
      name: 'HTML & CSS',
      issuer: 'IT Specialist - Pearson',
      year: '2024',
      category: 'Web',
      description: 'Web development fundamentals and responsive design principles'
    }
  ];

  const categories = ['All', 'VLSI', 'HDL', 'FPGA', 'Programming', 'Hardware', 'Web'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'VLSI': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'HDL': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'FPGA': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Programming': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Hardware': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Web': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Semiconductor': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'IC Design': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-stagger"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-110 transition-transform duration-200">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(cert.category)}`}>
                  {cert.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {cert.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {cert.year}
                </span>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110 transform">
                  <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="text-center" data-aos="fade-up">
          <button
            onClick={() => setShowGallery(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-pulse-subtle"
          >
            View All Certificates
          </button>
        </div>

        {/* Certificate Gallery Modal */}
        {showGallery && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Certificate Gallery
                </h3>
                <button
                  onClick={() => setShowGallery(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Certificate Display */}
              <div className="p-6">
                <div className="relative">
                  {/* Main Certificate Display */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 mb-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {certificates[currentCertIndex].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {certificates[currentCertIndex].issuer}
                    </p>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(certificates[currentCertIndex].category)}`}>
                      {certificates[currentCertIndex].category}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevCertificate}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={nextCertificate}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {certificates.map((cert, index) => (
                    <button
                      key={cert.id}
                      onClick={() => setCurrentCertIndex(index)}
                      className={`flex-shrink-0 p-3 rounded-lg border-2 transition-all duration-200 ${
                        index === currentCertIndex
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    >
                      <Award className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;