import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl animate-fade-in-up">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          About InternConnect
        </h1>
        
        {/* Hero Statement */}
        <div className="mb-12">
          <p className="text-xl text-gray-200 leading-relaxed mb-6 font-light">
            Transforming careers through strategic internship connections and professional development opportunities.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To bridge the critical gap between academic learning and professional practice by creating meaningful connections between ambitious students, recent graduates, and forward-thinking organizations seeking fresh talent.
            </p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the premier global platform where career aspirations meet opportunity, fostering a new generation of skilled professionals equipped with real-world experience and industry insights.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">For Students</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Access to curated internship opportunities, practical training programs, and mentorship connections that complement your academic journey and accelerate career readiness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-6 hover:from-emerald-500/20 hover:to-green-500/20 transition-all duration-300">
              <h4 className="text-lg font-semibold text-emerald-300 mb-3">For Graduates</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional development opportunities, industry-specific training programs, and direct pathways to full-time employment through our extensive employer network.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6 hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300">
              <h4 className="text-lg font-semibold text-orange-300 mb-3">For Employers</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Access to pre-screened, motivated talent pipeline with streamlined recruitment processes and comprehensive candidate profiles to find your ideal team members.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-400 mb-8">Why Choose InternConnect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-xl font-bold">🎯</span>
              </div>
              <h4 className="text-blue-300 font-semibold mb-2">Targeted Matching</h4>
              <p className="text-gray-400 text-sm">AI-powered algorithms match candidates with opportunities based on skills, interests, and career goals.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 text-xl font-bold">🚀</span>
              </div>
              <h4 className="text-emerald-300 font-semibold mb-2">Career Acceleration</h4>
              <p className="text-gray-400 text-sm">Fast-track your professional growth with hands-on experience and industry mentorship programs.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 text-xl font-bold">🌐</span>
              </div>
              <h4 className="text-cyan-300 font-semibold mb-2">Global Network</h4>
              <p className="text-gray-400 text-sm">Connect with leading companies and organizations across multiple industries and geographic locations.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-400 text-xl font-bold">📈</span>
              </div>
              <h4 className="text-orange-300 font-semibold mb-2">Success Tracking</h4>
              <p className="text-gray-400 text-sm">Comprehensive analytics and progress tracking to measure and optimize your career development journey.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 border border-gray-600/30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Career?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Join thousands of successful professionals who started their journey with InternConnect. Whether you're taking your first step into the professional world or looking to pivot your career, we're here to guide you toward meaningful opportunities that align with your aspirations.
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
      <footer className="relative z-10 text-center mt-16 animate-fade-in-footer">
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

export default About;