import React, { useState } from 'react';

const PT = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [savedJobs, setSavedJobs] = useState(new Set());

  const categories = [
    'all', 'Technology', 'Engineering', 'Healthcare', 'Finance', 'Manufacturing', 'Education', 'Agriculture'
  ];

  const locations = [
    'all', 'Remote', 'Dar es Salaam', 'Arusha', 'Mwanza', 'Dodoma', 'Mbeya', 'Morogoro'
  ];

  const practicalTrainings = [
    {
      id: 1,
      title: 'Software Engineering Practical Training',
      company: 'InnovateTech Hub',
      logo: '⚡',
      location: 'Dar es Salaam',
      type: 'Practical Training',
      duration: '6 months',
      stipend: 'TZS 450,000/month',
      category: 'Technology',
      rating: 4.9,
      applicants: 67,
      description: 'Comprehensive hands-on training in software development with real-world projects. Work with experienced engineers on scalable applications and learn industry best practices in agile development.',
      requirements: ['Python', 'JavaScript', 'Database Design', 'API Development'],
      posted: '1 day ago',
      urgent: true,
      companySize: '100-200 employees',
      benefits: ['Industry Certification', 'Project Portfolio', 'Job Placement Assistance', 'Professional Mentorship']
    },
    {
      id: 2,
      title: 'UI/UX Design Practical Training',
      company: 'Design Studio Pro',
      logo: '🎨',
      location: 'Arusha',
      type: 'Practical Training',
      duration: '5 months',
      stipend: 'TZS 400,000/month',
      category: 'Technology',
      rating: 4.8,
      applicants: 42,
      description: 'Work alongside senior designers on real client projects and build your professional portfolio with impactful designs. Learn complete design process from research to implementation.',
      requirements: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      posted: '3 days ago',
      urgent: true,
      companySize: '25-50 employees',
      benefits: ['Design Portfolio', 'Client Project Experience', 'Industry Tools Training', 'Career Guidance']
    },
    {
      id: 3,
      title: 'Mechanical Engineering PT',
      company: 'Industrial Manufacturing Ltd',
      logo: '⚙️',
      location: 'Mbeya',
      type: 'Practical Training',
      duration: '8 months',
      stipend: 'TZS 380,000/month',
      category: 'Engineering',
      rating: 4.7,
      applicants: 31,
      description: 'Gain comprehensive experience in mechanical design, manufacturing processes, and quality control. Work on real industrial projects and learn from experienced engineers.',
      requirements: ['AutoCAD', 'SolidWorks', 'Engineering Principles', 'Manufacturing Knowledge'],
      posted: '5 days ago',
      urgent: false,
      companySize: '200+ employees',
      benefits: ['Engineering Certification', 'Industrial Experience', 'Equipment Training', 'Safety Certification']
    },
    {
      id: 4,
      title: 'Clinical Laboratory PT',
      company: 'Advanced Medical Center',
      logo: '🔬',
      location: 'Dar es Salaam',
      type: 'Practical Training',
      duration: '6 months',
      stipend: 'TZS 320,000/month',
      category: 'Healthcare',
      rating: 4.6,
      applicants: 28,
      description: 'Comprehensive practical training in clinical laboratory procedures, diagnostic testing, and quality assurance. Work with state-of-the-art laboratory equipment and experienced technologists.',
      requirements: ['Laboratory Skills', 'Medical Knowledge', 'Attention to Detail', 'Safety Protocols'],
      posted: '1 week ago',
      urgent: false,
      companySize: '150-300 employees',
      benefits: ['Clinical Certification', 'Laboratory Experience', 'Medical Equipment Training', 'Professional References']
    },
    {
      id: 5,
      title: 'Financial Analysis PT Program',
      company: 'Capital Markets Group',
      logo: '📈',
      location: 'Dar es Salaam',
      type: 'Practical Training',
      duration: '7 months',
      stipend: 'TZS 420,000/month',
      category: 'Finance',
      rating: 4.8,
      applicants: 39,
      description: 'Intensive practical training in financial modeling, investment analysis, and market research. Work on real financial projects and learn advanced analytical techniques.',
      requirements: ['Financial Modeling', 'Excel Advanced', 'Statistical Analysis', 'Investment Knowledge'],
      posted: '4 days ago',
      urgent: true,
      companySize: '75-150 employees',
      benefits: ['CFA Preparation', 'Financial Software Training', 'Industry Networking', 'Career Placement']
    },
    {
      id: 6,
      title: 'Agricultural Technology PT',
      company: 'AgriTech Solutions',
      logo: '🌱',
      location: 'Morogoro',
      type: 'Practical Training',
      duration: '6 months',
      stipend: 'TZS 300,000/month',
      category: 'Agriculture',
      rating: 4.5,
      applicants: 22,
      description: 'Hands-on training in modern agricultural techniques, crop management, and agricultural technology. Work with farmers and agricultural specialists on real projects.',
      requirements: ['Agricultural Knowledge', 'Technology Skills', 'Field Work', 'Data Collection'],
      posted: '6 days ago',
      urgent: false,
      companySize: '30-75 employees',
      benefits: ['Agricultural Certification', 'Field Experience', 'Technology Training', 'Rural Development Skills']
    },
    {
      id: 7,
      title: 'Manufacturing Process PT',
      company: 'TechManufacturing Corp',
      logo: '🏭',
      location: 'Mwanza',
      type: 'Practical Training',
      duration: '8 months',
      stipend: 'TZS 390,000/month',
      category: 'Manufacturing',
      rating: 4.7,
      applicants: 35,
      description: 'Comprehensive training in manufacturing processes, quality control, and production management. Work in a modern manufacturing facility with cutting-edge technology.',
      requirements: ['Manufacturing Knowledge', 'Quality Control', 'Process Improvement', 'Safety Standards'],
      posted: '2 days ago',
      urgent: true,
      companySize: '300+ employees',
      benefits: ['Manufacturing Certification', 'Process Training', 'Quality Management', 'Industrial Safety']
    },
    {
      id: 8,
      title: 'Educational Technology PT',
      company: 'EduTech Innovation',
      logo: '📚',
      location: 'Dodoma',
      type: 'Practical Training',
      duration: '5 months',
      stipend: 'TZS 280,000/month',
      category: 'Education',
      rating: 4.4,
      applicants: 26,
      description: 'Practical training in educational technology, curriculum development, and digital learning platforms. Work with educational institutions to implement technology solutions.',
      requirements: ['Educational Technology', 'Curriculum Design', 'Digital Tools', 'Teaching Skills'],
      posted: '1 week ago',
      urgent: false,
      companySize: '20-50 employees',
      benefits: ['Education Certification', 'Technology Training', 'Curriculum Experience', 'Teaching Skills']
    }
  ];

  const filteredTrainings = practicalTrainings.filter(training => {
    const matchesSearch = training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         training.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || training.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || training.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const toggleSaveJob = (id) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(id)) {
      newSavedJobs.delete(id);
    } else {
      newSavedJobs.add(id);
    }
    setSavedJobs(newSavedJobs);
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      'Technology': 'from-cyan-400 to-blue-400',
      'Engineering': 'from-orange-400 to-red-400',
      'Healthcare': 'from-red-400 to-pink-400',
      'Finance': 'from-emerald-400 to-green-400',
      'Manufacturing': 'from-purple-400 to-indigo-400',
      'Education': 'from-blue-400 to-cyan-400',
      'Agriculture': 'from-yellow-400 to-orange-400'
    };
    return gradients[category] || 'from-pink-400 to-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl animate-fade-in-up">
        
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 hover:bg-gray-800/60 transition-all duration-300">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Practical Training
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto font-light">
            Advance your career with comprehensive practical training programs designed to provide real-world experience and professional certification.
          </p>
          
          {/* Search Section */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search practical training by title, company, or field..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pr-12 bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300 hover:bg-gray-800/80"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg">
                  🔍
                </div>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-4 bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl text-white focus:border-cyan-500 focus:outline-none transition-all duration-300 min-w-[180px] hover:bg-gray-800/80"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category === 'all' ? 'All Fields' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="p-4 bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all duration-300 min-w-[180px] hover:bg-gray-800/80"
              >
                {locations.map(location => (
                  <option key={location} value={location} className="bg-gray-800">
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-gray-200">
              <span className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {filteredTrainings.length}
              </span>
              <span className="text-lg font-light">professional training programs available</span>
            </div>
          </div>
        </div>

        {/* Training Listings */}
        <div className="space-y-8 mb-16">
          {filteredTrainings.map((training, index) => (
            <div
              key={training.id}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-300 hover:transform hover:scale-[1.01] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Section - Company & Training Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-4xl bg-gray-700/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-600/50">
                      {training.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${getCategoryGradient(training.category)} bg-clip-text text-transparent`}>
                            {training.title}
                          </h2>
                          <p className="text-xl text-gray-200 font-semibold mb-2">
                            {training.company}
                          </p>
                          <p className="text-gray-400 font-light">
                            {training.companySize}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleSaveJob(training.id)}
                          className={`text-2xl p-3 rounded-full transition-all duration-300 ${
                            savedJobs.has(training.id) 
                              ? 'text-yellow-400 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30' 
                              : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/20 hover:backdrop-blur-sm hover:border hover:border-yellow-500/30'
                          }`}
                        >
                          {savedJobs.has(training.id) ? '⭐' : '☆'}
                        </button>
                      </div>
                      
                      {/* Training Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 text-lg">📍</span>
                          <span className="text-gray-300">{training.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-orange-400 text-lg">⏰</span>
                          <span className="text-gray-300">{training.duration}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400 text-lg">💰</span>
                          <span className="text-emerald-400 font-semibold">{training.stipend}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-yellow-400 text-lg">⭐</span>
                          <span className="text-gray-300">{training.rating} • {training.applicants} applied</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">About This Training Program</h3>
                    <p className="text-gray-300 leading-relaxed font-light">
                      {training.description}
                    </p>
                  </div>

                  {/* Skills & Benefits */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                        <span className="text-cyan-400">🎯</span>
                        Prerequisites
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {training.requirements.map((skill, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-700/50 backdrop-blur-sm text-cyan-300 rounded-lg text-sm border border-gray-600/50 hover:bg-gray-700/70 transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <span className="text-purple-400">🏆</span>
                        Program Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {training.benefits.map((benefit, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-700/50 backdrop-blur-sm text-purple-300 rounded-lg text-sm border border-gray-600/50 hover:bg-gray-700/70 transition-all duration-300">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Action Panel */}
                <div className="space-y-6">
                  {/* Status & Urgency */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                        🎓 Practical Training
                      </span>
                      {training.urgent && (
                        <span className="px-4 py-2 bg-red-500/20 backdrop-blur-sm text-red-300 rounded-full text-sm font-medium border border-red-500/30 animate-pulse">
                          🔥 Limited Spots
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm font-light">
                      Posted {training.posted}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Apply for Training
                    </button>
                    <button className="w-full bg-gray-700/50 backdrop-blur-sm hover:bg-gray-700/70 text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50">
                      Program Details
                    </button>
                    <button className="w-full bg-cyan-500/20 backdrop-blur-sm hover:bg-cyan-500/30 text-cyan-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50">
                      Contact Coordinator
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        {filteredTrainings.length > 0 && (
          <div className="text-center mb-16">
            <button className="bg-gray-800/40 backdrop-blur-sm hover:bg-gray-800/60 text-white font-semibold px-12 py-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
              Explore More Programs
            </button>
          </div>
        )}

        {/* Platform Statistics */}
        <div className="mb-16 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 hover:bg-gray-800/60 transition-all duration-300">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose PT Programs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">200+</div>
              <div className="text-gray-400 font-light">Training Programs</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">80+</div>
              <div className="text-gray-400 font-light">Industry Partners</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">1,800+</div>
              <div className="text-gray-400 font-light">Professionals Trained</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-400 font-light">Certification Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-gray-600/30 rounded-xl p-8 mb-16 backdrop-blur-sm hover:from-purple-500/20 hover:via-pink-500/20 hover:to-cyan-500/20 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Ready to Advance Your Skills?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-center font-light max-w-3xl mx-auto">
            Join thousands of professionals who have accelerated their careers through our comprehensive practical training programs. Build real-world experience and earn industry-recognized certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Training
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center mt-8 animate-fade-in-footer">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6 animate-line-expand"></div>
        <p className="text-gray-400 font-light">
          © 2025 InternConnect. Professional Development Through Practical Training
        </p>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes line-expand {
          from { width: 0; }
          to { width: 4rem; }
        }
        @keyframes fade-in-footer {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-line-expand { animation: line-expand 1s ease-out 2.5s both; }
        .animate-fade-in-footer { animation: fade-in-footer 1s ease-out 2.8s both; }
      `}</style>
    </div>
  );
};

export default PT;