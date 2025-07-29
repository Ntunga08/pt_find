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
      description: 'Join our dynamic team and work on cutting-edge web applications using React and modern technologies.',
      requirements: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
      posted: '2 days ago',
      urgent: true
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
      description: 'Learn digital marketing strategies, social media management, and content creation in a fast-paced environment.',
      requirements: ['Social Media', 'Content Writing', 'Analytics', 'Creativity'],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'UI/UX Design Intern',
      company: 'Design Studio Pro',
      logo: '🎨',
      location: 'Arusha',
      type: 'Practical Training',
      duration: '6 months',
      stipend: 'TZS 400,000/month',
      category: 'Design',
      rating: 4.9,
      applicants: 28,
      description: 'Work alongside senior designers on real client projects and build your portfolio with impactful designs.',
      requirements: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      posted: '3 days ago',
      urgent: true
    },
    {
      id: 4,
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
      description: 'Analyze business processes, create reports, and support strategic decision-making initiatives.',
      requirements: ['Excel', 'Data Analysis', 'PowerPoint', 'Problem Solving'],
      posted: '5 days ago',
      urgent: false
    },
    {
      id: 5,
      title: 'Software Engineering Intern',
      company: 'InnovateTech Hub',
      logo: '⚡',
      location: 'Remote',
      type: 'Practical Training',
      duration: '5 months',
      stipend: 'TZS 450,000/month',
      category: 'Technology',
      rating: 4.9,
      applicants: 67,
      description: 'Build scalable applications and work with experienced engineers on innovative projects.',
      requirements: ['Python', 'JavaScript', 'Database Design', 'API Development'],
      posted: '1 day ago',
      urgent: true
    },
    {
      id: 6,
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
      description: 'Support healthcare professionals and gain hands-on experience in medical administration.',
      requirements: ['Medical Knowledge', 'Communication', 'Attention to Detail', 'Empathy'],
      posted: '4 days ago',
      urgent: false
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
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-400 mb-4">
            InternConnect
          </h1>
          <p className="text-xl text-gray-300">
            Find Your Perfect Internship
          </p>
        </div>

        {/* Simple Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="🔍 Search internships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-900">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none"
            >
              {locations.map(location => (
                <option key={location} value={location} className="bg-gray-900">
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-center">
            <span className="text-green-400 font-bold text-lg">{filteredInternships.length}</span>
            <span className="text-gray-400 ml-2">opportunities found</span>
          </div>
        </div>

        {/* Clean Job Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{internship.logo}</span>
                  <div>
                    <h3 className={`font-bold text-lg ${getCategoryColor(internship.category)}`}>
                      {internship.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{internship.company}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleSaveJob(internship.id)}
                  className={`text-xl transition-colors ${
                    savedJobs.has(internship.id) ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'
                  }`}
                >
                  {savedJobs.has(internship.id) ? '⭐' : '☆'}
                </button>
              </div>

              {/* Type Badge */}
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  internship.type === 'Internship' 
                    ? 'bg-blue-900 text-blue-300'
                    : 'bg-purple-900 text-purple-300'
                }`}>
                  {internship.type}
                </span>
                {internship.urgent && (
                  <span className="ml-2 px-3 py-1 bg-red-900 text-red-300 rounded-full text-xs font-medium">
                    🔥 Urgent
                  </span>
                )}
              </div>

              {/* Job Details */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">📍</span>
                  <span className="text-gray-300">{internship.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">⏰</span>
                  <span className="text-gray-300">{internship.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">💰</span>
                  <span className="text-green-400 font-medium">{internship.stipend}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-300">{internship.rating} • {internship.applicants} applied</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {internship.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.requirements.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                    {skill}
                  </span>
                ))}
                {internship.requirements.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-500 rounded text-xs">
                    +{internship.requirements.length - 3}
                  </span>
                )}
              </div>

              {/* Apply Button */}
              <button className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-3 rounded-lg transition-colors duration-300">
                Apply Now
              </button>
              
              <div className="text-xs text-gray-500 text-center mt-2">
                Posted {internship.posted}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg border border-gray-600 transition-colors duration-300">
            Load More Jobs
          </button>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400">1000+</div>
            <div className="text-gray-400">Active Jobs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">250+</div>
            <div className="text-gray-400">Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">5000+</div>
            <div className="text-gray-400">Students Placed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">98%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pb-8">
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© 2025 InternConnect - Connecting talent with opportunity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipListings;