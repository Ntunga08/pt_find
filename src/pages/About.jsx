import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-bounce-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          About InternConnect
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          InternConnect is a dedicated platform that bridges the gap between students, graduates, and practical work experiences. Whether you're a student seeking hands-on practical training as part of your academic curriculum or a graduate looking to gain valuable industry experience through internships — we connect you with the right opportunities.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Our mission is to empower future professionals by providing a reliable and accessible gateway to real-world learning. Through our platform, users can discover, apply, and prepare for career-launching experiences across various domains and industries.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Join us on this journey to make career-building simpler, smarter, and more successful — one internship or training opportunity at a time.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center mt-16 animate-fade-in-footer">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6 animate-line-expand"></div>
        <p className="text-gray-400 font-light">
          © 2025 InternConnect. Connecting talent with opportunity.
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
