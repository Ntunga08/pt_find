import React from 'react';

const Home = () => {
  const handleInternshipsClick = () => {
    // Replace with your navigation logic
    console.log('Navigate to /internships');
  };

  const handlePTClick = () => {
    // Replace with your navigation logic
    console.log('Navigate to /PT');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div className="absolute top-10 right-1/4 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-drift"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-drift-reverse"></div>
      
      {/* Header Section */}
      <div className="relative z-10 text-center mb-12 animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight animate-glow">
          InternConnect
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6 rounded-full animate-expand"></div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light animate-fade-up">
          Your trusted platform to discover amazing internships and practical training opportunities that launch your career
        </p>
      </div>

      {/* Enhanced Call to Action */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 mb-16">
        <button 
          onClick={handleInternshipsClick}
          className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:from-blue-500 hover:to-blue-600 overflow-hidden animate-slide-in-left"
        >
          <span className="relative z-10">Find Internships</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </button>
        
        <button 
          onClick={handlePTClick}
          className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 hover:from-orange-500 hover:to-red-500 overflow-hidden animate-slide-in-right"
        >
          <span className="relative z-10">Find Practical Training</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-delay"></div>
        </button>
      </div>

      {/* Enhanced Success Stories */}
      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-12 animate-fade-in-up">
          Success Stories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Testimonial Cards */}
          <div className="group bg-gray-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/30 animate-card-float">
            <div className="text-4xl mb-4 animate-bounce-gentle">🌟</div>
            <p className="text-gray-300 mb-4 italic">
              "InternConnect helped me land my dream internship at a tech startup!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-pulse-slow">
                A
              </div>
              <span className="font-semibold text-gray-200">Asha M.</span>
            </div>
          </div>

          <div className="group bg-gray-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-3 hover:-rotate-1 transition-all duration-500 border border-gray-700/50 hover:border-emerald-500/30 md:mt-8 animate-card-float-delay">
            <div className="text-4xl mb-4 animate-bounce-gentle-delay">🚀</div>
            <p className="text-gray-300 mb-4 italic">
              "The platform made finding PT opportunities so much easier!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-pulse-slow">
                K
              </div>
              <span className="font-semibold text-gray-200">Kevin R.</span>
            </div>
          </div>

          <div className="group bg-gray-800/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 border border-gray-700/50 hover:border-amber-500/30 animate-card-float-delay-2">
            <div className="text-4xl mb-4 animate-bounce-gentle-delay-2">💼</div>
            <p className="text-gray-300 mb-4 italic">
              "Professional, efficient, and results-driven. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-pulse-slow">
                S
              </div>
              <span className="font-semibold text-gray-200">Sarah L.</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl hover:bg-gray-700/80 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-700/50 hover:border-blue-500/50 animate-stats-appear">
            <div className="text-3xl font-bold text-blue-400 mb-2 animate-counter">1000+</div>
            <div className="text-gray-400">Active Internships</div>
          </div>
          <div className="text-center p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl hover:bg-gray-700/80 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-700/50 hover:border-orange-500/50 animate-stats-appear-delay">
            <div className="text-3xl font-bold text-orange-400 mb-2 animate-counter-delay">500+</div>
            <div className="text-gray-400">PT Opportunities</div>
          </div>
          <div className="text-center p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl hover:bg-gray-700/80 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-700/50 hover:border-emerald-500/50 animate-stats-appear-delay-2">
            <div className="text-3xl font-bold text-emerald-400 mb-2 animate-counter-delay-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl hover:bg-gray-700/80 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-700/50 hover:border-amber-500/50 animate-stats-appear-delay-3">
            <div className="text-3xl font-bold text-amber-400 mb-2 animate-counter-delay-3">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="relative z-10 text-center animate-fade-in-footer">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6 animate-line-expand"></div>
        <p className="text-gray-400 font-light">
          © 2025 InternConnect. Connecting talent with opportunity.
        </p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
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
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(10px) translateY(-10px); }
          50% { transform: translateX(-5px) translateY(-20px); }
          75% { transform: translateX(-10px) translateY(-10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes drift-reverse {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-10px) translateY(10px); }
          50% { transform: translateX(5px) translateY(20px); }
          75% { transform: translateX(10px) translateY(10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes expand {
          0% { width: 0; opacity: 0; }
          100% { width: 6rem; opacity: 1; }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes counter {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes line-expand {
          from { width: 0; }
          to { width: 4rem; }
        }
        
        @keyframes fade-in-footer {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-drift { animation: drift 10s ease-in-out infinite; }
        .animate-drift-reverse { animation: drift-reverse 12s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-expand { animation: expand 1.5s ease-out 0.5s both; }
        .animate-fade-up { animation: fade-up 1s ease-out 0.8s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 1.2s both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 1.4s both; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-shimmer-delay { animation: shimmer 3s ease-in-out infinite 1.5s; }
        .animate-card-float { animation: card-float 3s ease-in-out infinite, fade-in-up 0.8s ease-out 1.6s both; }
        .animate-card-float-delay { animation: card-float 3s ease-in-out infinite 0.5s, fade-in-up 0.8s ease-out 1.8s both; }
        .animate-card-float-delay-2 { animation: card-float 3s ease-in-out infinite 1s, fade-in-up 0.8s ease-out 2s both; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-bounce-gentle-delay { animation: bounce-gentle 2s ease-in-out infinite 0.3s; }
        .animate-bounce-gentle-delay-2 { animation: bounce-gentle 2s ease-in-out infinite 0.6s; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-counter { animation: counter 0.8s ease-out 2.2s both; }
        .animate-counter-delay { animation: counter 0.8s ease-out 2.4s both; }
        .animate-counter-delay-2 { animation: counter 0.8s ease-out 2.6s both; }
        .animate-counter-delay-3 { animation: counter 0.8s ease-out 2.8s both; }
        .animate-stats-appear { animation: fade-in-up 0.8s ease-out 2.2s both; }
        .animate-stats-appear-delay { animation: fade-in-up 0.8s ease-out 2.4s both; }
        .animate-stats-appear-delay-2 { animation: fade-in-up 0.8s ease-out 2.6s both; }
        .animate-stats-appear-delay-3 { animation: fade-in-up 0.8s ease-out 2.8s both; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 1.6s both; }
        .animate-line-expand { animation: line-expand 1s ease-out 3s both; }
        .animate-fade-in-footer { animation: fade-in-footer 1s ease-out 3.2s both; }
      `}</style>
    </div>
  );
};

export default Home;