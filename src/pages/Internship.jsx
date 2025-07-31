import React, { useState } from 'react';

const InternshipListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [savedJobs, setSavedJobs] = useState(new Set());

  const categories = [
    'all', 'Technology', 'Marketing', 'Design', 'Business', 'Healthcare', 'Finance', 'Engineering'
  ];

  const locations = [
    'all', 'Remote', 'Dar es Salaam', 'Arusha', 'Mwanza', 'Dodoma', 'Mbeya'
  ];

  const internships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Africa',
      logo: '💻',
      location: 'Dar es Salaam',
      type: 'Internship',
      duration: '3 months',
      stipend: 'TZS 300,000/month',
      category: 'Technology',
      rating: 4.8,
      applicants: 45,
      description: 'Join our dynamic team and work on cutting-edge web applications using React and modern technologies. You will collaborate with senior developers and gain hands-on experience in agile development processes.',
      requirements: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
      posted: '2 days ago',
      urgent: true,
      companySize: '50-100 employees',
      benefits: ['Mentorship Program', 'Certificate', 'Networking Events']
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Creative Solutions Ltd',
      logo: '📱',
      location: 'Remote',
      type: 'Internship',
      duration: '4 months',
      stipend: 'TZS 250,000/month',
      category: 'Marketing',
      rating: 4.6,
      applicants: 32,
      description: 'Learn digital marketing strategies, social media management, and content creation in a fast-paced environment. Work on real campaigns and develop your portfolio.',
      requirements: ['Social Media', 'Content Writing', 'Analytics', 'Creativity'],
      posted: '1 week ago',
      urgent: false,
      companySize: '20-50 employees',
      benefits: ['Flexible Hours', 'Remote Work', 'Portfolio Development']
    },
    {
      id: 3,
      title: 'Business Analyst Intern',
      company: 'FinanceMax Group',
      logo: '📊',
      location: 'Dar es Salaam',
      type: 'Internship',
      duration: '3 months',
      stipend: 'TZS 350,000/month',
      category: 'Business',
      rating: 4.7,
      applicants: 18,
      description: 'Analyze business processes, create reports, and support strategic decision-making initiatives. Gain exposure to financial modeling and market analysis.',
      requirements: ['Excel', 'Data Analysis', 'PowerPoint', 'Problem Solving'],
      posted: '5 days ago',
      urgent: false,
      companySize: '100+ employees',
      benefits: ['Professional Training', 'Career Guidance', 'Industry Exposure']
    },
    {
      id: 4,
      title: 'Healthcare Assistant Intern',
      company: 'MedCare International',
      logo: '🏥',
      location: 'Mwanza',
      type: 'Internship',
      duration: '4 months',
      stipend: 'TZS 280,000/month',
      category: 'Healthcare',
      rating: 4.5,
      applicants: 23,
      description: 'Support healthcare professionals and gain hands-on experience in medical administration. Learn about patient care protocols and healthcare management systems.',
      requirements: ['Medical Knowledge', 'Communication', 'Attention to Detail', 'Empathy'],
      posted: '4 days ago',
      urgent: false,
      companySize: '200+ employees',
      benefits: ['Clinical Experience', 'Medical Training', 'Professional References']
    },
    {
      id: 5,
      title: 'Financial Analyst Intern',
      company: 'Capital Investments Ltd',
      logo: '💰',
      location: 'Dar es Salaam',
      type: 'Internship',
      duration: '3 months',
      stipend: 'TZS 320,000/month',
      category: 'Finance',
      rating: 4.6,
      applicants: 29,
      description: 'Assist with financial modeling, market research, and investment analysis in a professional environment. Work alongside experienced analysts on real projects.',
      requirements: ['Excel', 'Financial Modeling', 'Research Skills', 'Analytical Thinking'],
      posted: '3 days ago',
      urgent: true,
      companySize: '75-100 employees',
      benefits: ['CFA Study Support', 'Financial Software Training', 'Industry Connections']
    },
    {
      id: 6,
      title: 'Software Development Intern',
      company: 'CodeCraft Solutions',
      logo: '⚡',
      location: 'Remote',
      type: 'Internship',
      duration: '4 months',
      stipend: 'TZS 380,000/month',
      category: 'Technology',
      rating: 4.8,
      applicants: 52,
      description: 'Work on real projects with our development team and learn industry best practices in software development. Participate in code reviews and agile ceremonies.',
      requirements: ['Python', 'JavaScript', 'Problem Solving', 'Team Collaboration'],
      posted: '1 day ago',
      urgent: true,
      companySize: '30-50 employees',
      benefits: ['Code Mentorship', 'Open Source Contributions', 'Tech Conferences']
    }
  ];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || internship.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || internship.location === selectedLocation;
    
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
      'Marketing': 'from-pink-400 to-rose-400',
      'Design': 'from-purple-400 to-indigo-400',
      'Business': 'from-yellow-400 to-orange-400',
      'Healthcare': 'from-red-400 to-pink-400',
      'Finance': 'from-emerald-400 to-green-400',
      'Engineering': 'from-orange-400 to-red-400'
    };
    return gradients[category] || 'from-blue-400 to-cyan-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-float"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl animate-fade-in-up">
        
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 hover:bg-gray-800/60 transition-all duration-300">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Find Your Perfect Internship
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto font-light">
            Connect with leading companies across Tanzania and launch your career with meaningful internship experiences that matter.
          </p>
          
          {/* Search Section */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search internships by title, company, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pr-12 bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-all duration-300 hover:bg-gray-800/80"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-400 text-lg">
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
                    {category === 'all' ? 'All Categories' : category}
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
              <span className="font-bold text-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {filteredInternships.length}
              </span>
              <span className="text-lg font-light">quality internship opportunities available</span>
            </div>
          </div>
        </div>

        {/* Internship Listings */}
        <div className="space-y-8 mb-16">
          {filteredInternships.map((internship, index) => (
            <div
              key={internship.id}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-300 hover:transform hover:scale-[1.01] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Section - Company & Job Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-4xl bg-gray-700/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-600/50">
                      {internship.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${getCategoryGradient(internship.category)} bg-clip-text text-transparent`}>
                            {internship.title}
                          </h2>
                          <p className="text-xl text-gray-200 font-semibold mb-2">
                            {internship.company}
                          </p>
                          <p className="text-gray-400 font-light">
                            {internship.companySize}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleSaveJob(internship.id)}
                          className={`text-2xl p-3 rounded-full transition-all duration-300 ${
                            savedJobs.has(internship.id) 
                              ? 'text-yellow-400 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30' 
                              : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/20 hover:backdrop-blur-sm hover:border hover:border-yellow-500/30'
                          }`}
                        >
                          {savedJobs.has(internship.id) ? '⭐' : '☆'}
                        </button>
                      </div>
                      
                      {/* Job Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 text-lg">📍</span>
                          <span className="text-gray-300">{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-orange-400 text-lg">⏰</span>
                          <span className="text-gray-300">{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400 text-lg">💰</span>
                          <span className="text-emerald-400 font-semibold">{internship.stipend}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-yellow-400 text-lg">⭐</span>
                          <span className="text-gray-300">{internship.rating} • {internship.applicants} applied</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">About This Internship</h3>
                    <p className="text-gray-300 leading-relaxed font-light">
                      {internship.description}
                    </p>
                  </div>

                  {/* Skills & Benefits */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                        <span className="text-cyan-400">🎯</span>
                        Skills Required
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.requirements.map((skill, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-700/50 backdrop-blur-sm text-cyan-300 rounded-lg text-sm border border-gray-600/50 hover:bg-gray-700/70 transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                        <span className="text-emerald-400">🎁</span>
                        What You'll Get
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.benefits.map((benefit, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-700/50 backdrop-blur-sm text-emerald-300 rounded-lg text-sm border border-gray-600/50 hover:bg-gray-700/70 transition-all duration-300">
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
                      <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                        💼 Internship Position
                      </span>
                      {internship.urgent && (
                        <span className="px-4 py-2 bg-red-500/20 backdrop-blur-sm text-red-300 rounded-full text-sm font-medium border border-red-500/30 animate-pulse">
                          🔥 Urgent Hiring
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm font-light">
                      Posted {internship.posted}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Apply for This Internship
                    </button>
                    <button className="w-full bg-gray-700/50 backdrop-blur-sm hover:bg-gray-700/70 text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50">
                      Learn More About Company
                    </button>
                    <button className="w-full bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 text-purple-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50">
                      Share This Opportunity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        {filteredInternships.length > 0 && (
          <div className="text-center mb-16">
            <button className="bg-gray-800/40 backdrop-blur-sm hover:bg-gray-800/60 text-white font-semibold px-12 py-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
              Discover More Opportunities
            </button>
          </div>
        )}

        {/* Platform Statistics */}
        <div className="mb-16 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 hover:bg-gray-800/60 transition-all duration-300">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Why Students Choose InternConnect
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-400 font-light">Active Internships</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">150+</div>
              <div className="text-gray-400 font-light">Partner Companies</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2,500+</div>
              <div className="text-gray-400 font-light">Students Placed</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">95%</div>
              <div className="text-gray-400 font-light">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 border border-gray-600/30 rounded-xl p-8 mb-16 backdrop-blur-sm hover:from-blue-500/20 hover:via-emerald-500/20 hover:to-cyan-500/20 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Ready to Launch Your Career?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-center font-light max-w-3xl mx-auto">
            Join thousands of successful professionals who started their journey with InternConnect. Whether you're taking your first step into the professional world or looking to pivot your career, we're here to guide you toward meaningful opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center mt-8 animate-fade-in-footer">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6 animate-line-expand"></div>
        <p className="text-gray-400 font-light">
          © 2025 InternConnect. Empowering careers, connecting futures.
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

export default InternshipListings;