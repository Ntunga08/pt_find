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

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'text-cyan-400',
      'Marketing': 'text-pink-400',
      'Design': 'text-purple-400',
      'Business': 'text-yellow-400',
      'Healthcare': 'text-red-400',
      'Finance': 'text-green-400',
      'Engineering': 'text-orange-400'
    };
    return colors[category] || 'text-blue-400';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gray-900 rounded-2xl border border-gray-800 p-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect <span className="text-green-400">Internship</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                  className="w-full p-4 pr-12 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400 text-lg">
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
                    {category === 'all' ? 'All Categories' : category}
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
              <span className="font-bold text-2xl text-green-400">{filteredInternships.length}</span>
              <span className="text-lg">quality internship opportunities available</span>
            </div>
          </div>
        </div>

        {/* Internship Listings */}
        <div className="space-y-8">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.01]"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Section - Company & Job Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl bg-gray-800 p-4 rounded-2xl border border-gray-700">
                      {internship.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className={`text-3xl font-bold mb-2 ${getCategoryColor(internship.category)}`}>
                            {internship.title}
                          </h2>
                          <p className="text-xl text-white font-semibold mb-2">
                            {internship.company}
                          </p>
                          <p className="text-gray-400">
                            {internship.companySize}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleSaveJob(internship.id)}
                          className={`text-2xl p-3 rounded-full transition-all ${
                            savedJobs.has(internship.id) 
                              ? 'text-yellow-400 bg-yellow-900/30' 
                              : 'text-gray-500 hover:text-yellow-400 hover:bg-yellow-900/30'
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
                          <span className="text-green-400 text-lg">💰</span>
                          <span className="text-green-400 font-semibold">{internship.stipend}</span>
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
                    <h3 className="text-lg font-semibold text-white mb-3">About This Internship</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {internship.description}
                    </p>
                  </div>

                  {/* Skills & Benefits */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-cyan-400">🎯</span>
                        Skills Required
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.requirements.map((skill, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-800 text-cyan-300 rounded-lg text-sm border border-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-green-400">🎁</span>
                        What You'll Get
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.benefits.map((benefit, idx) => (
                          <span key={idx} 
                            className="px-3 py-2 bg-gray-800 text-green-300 rounded-lg text-sm border border-gray-700">
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
                      <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium border border-blue-700">
                        💼 Internship Position
                      </span>
                      {internship.urgent && (
                        <span className="px-4 py-2 bg-red-900 text-red-300 rounded-full text-sm font-medium border border-red-700 animate-pulse">
                          🔥 Urgent Hiring
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      Posted {internship.posted}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Apply for This Internship
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
                      Learn More About Company
                    </button>
                    <button className="w-full bg-purple-900 hover:bg-purple-800 text-purple-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-purple-700">
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
          <div className="text-center mt-16">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-12 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-600 transition-all duration-300">
              Discover More Opportunities
            </button>
          </div>
        )}

        {/* Platform Statistics */}
        <div className="mt-20 bg-gray-900 rounded-2xl border border-gray-800 p-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Why Students Choose <span className="text-green-400">InternTafuta</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-green-400">500+</div>
              <div className="text-gray-400">Active Internships</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-cyan-400">150+</div>
              <div className="text-gray-400">Partner Companies</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-purple-400">2,500+</div>
              <div className="text-gray-400">Students Placed</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-yellow-400">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2025 InternTafuta - Empowering Students Across Tanzania
          </p>
        </footer>
      </div>
    </div>
  );
};

export default InternshipListings;