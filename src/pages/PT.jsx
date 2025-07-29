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

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'text-cyan-400',
      'Engineering': 'text-orange-400',
      'Healthcare': 'text-red-400',
      'Finance': 'text-green-400',
      'Manufacturing': 'text-purple-400',
      'Education': 'text-blue-400',
      'Agriculture': 'text-yellow-400'
    };
    return colors[category] || 'text-pink-400';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gray-900 rounded-2xl border border-gray-800 p-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="text-purple-400">Practical Training</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                  className="w-full p-4 pr-12 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg">
                  🔍
                </div>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-4 bg-gray-800 border-2 border-gray-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none transition-colors min-w-[180px]"
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
                className="p-4 bg-gray-800 border-2 border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors min-w-[180px]"
              >
                {locations.map(location => (
                  <option key={location} value={location} className="bg-gray-800">
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <span className="font-bold text-2xl text-purple-400">{filteredTrainings.length}</span>
              <span className="text-lg">professional training programs available</span>
            </div>
          </div>
        </div>

        {/* Training Listings */}
        <div className="space-y-8">
          {filteredTrainings.map((training) => (
            <div
              key={training.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.01]"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Section - Company & Training Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl bg-gray-800 p-4 rounded-2xl border border-gray-700">
                      {training.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className={`text-3xl font-bold mb-2 ${getCategoryColor(training.category)}`}>
                            {training.title}
                          </h2>
                          <p className="text-xl text-white font-semibold mb-2">
                            {training.company}
                          </p>
                          <p className="text-gray-400">
                            {training.companySize}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleSaveJob(training.id)}
                          className={`text-2xl p-3 rounded-full transition-all ${
                            savedJobs.has(training.id) 
                              ? 'text-yellow-400 bg-yellow-900/30' 
                              : 'text-gray-500 hover:text-yellow-400 hover:bg-yellow-900/30'
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
                          <span className="text-green-400 text-lg">💰</span>
                          <span className="text-green-400 font-semibold">{training.stipend}</span>
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
                    <h3 className="text-lg font-semibold text-white mb-3">About This Training Program</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {training.description}
                    </p>
                  </div>

                  {/* Skills & Benefits */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-cyan-400">🎯</span>
                        Prerequisites
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {training.requirements.map((skill, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-800 text-cyan-300 rounded-lg text-sm border border-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-purple-400">🏆</span>
                        Program Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {training.benefits.map((benefit, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-800 text-purple-300 rounded-lg text-sm border border-gray-700">
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
                      <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium border border-purple-700">
                        🎓 Practical Training
                      </span>
                      {training.urgent && (
                        <span className="px-4 py-2 bg-red-900 text-red-300 rounded-full text-sm font-medium border border-red-700 animate-pulse">
                          🔥 Limited Spots
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      Posted {training.posted}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Apply for Training
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
                      Program Details
                    </button>
                    <button className="w-full bg-cyan-900 hover:bg-cyan-800 text-cyan-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-cyan-700">
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
          <div className="text-center mt-16">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-12 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-600 transition-all duration-300">
              Explore More Programs
            </button>
          </div>
        )}

        {/* Platform Statistics */}
        <div className="mt-20 bg-gray-900 rounded-2xl border border-gray-800 p-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose <span className="text-purple-400">PT Programs</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-purple-400">200+</div>
              <div className="text-gray-400">Training Programs</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-cyan-400">80+</div>
              <div className="text-gray-400">Industry Partners</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-green-400">1,800+</div>
              <div className="text-gray-400">Professionals Trained</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-orange-400">98%</div>
              <div className="text-gray-400">Certification Rate</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2025 InternTafuta - Professional Development Through Practical Training
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PT;