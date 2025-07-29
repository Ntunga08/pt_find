import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !confirmPassword)) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    if (isLogin) {
      // Login request
      try {
        const res = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
          alert('Login successful!');
          // Handle login success (e.g., save token, redirect)
        } else {
          alert(data.detail || 'Login failed');
        }
      } catch (err) {
        alert('Error connecting to backend');
      }
    } else {
      // Registration request
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        setIsLoading(false);
        return;
      }
      try {
        const res = await fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, confirm_password: confirmPassword }),
        });
        const data = await res.json();
        if (res.ok) {
          alert('Registration successful!');
          setIsLogin(true);
        } else {
          alert(data.detail || 'Registration failed');
        }
      } catch (err) {
        alert('Error connecting to backend');
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">💼</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to <span className="text-green-400">InternTafuta</span>
          </h1>
          <p className="text-gray-400">
            {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
          </p>
        </div>

        {/* Auth Form Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          
          {/* Toggle Buttons */}
          <div className="flex bg-gray-800 rounded-xl p-1 mb-8">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                isLogin 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                !isLogin 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                📧 Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                🔒 Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password (Sign Up only) */}
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  🔐 Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-4 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {/* Forgot Password Link (Login only) */}
            {isLogin && (
              <div className="text-right">
                <a href="/forgot-password" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300">
                  Forgot your password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isLogin
                  ? 'bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/50'
                  : 'bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:ring-purple-500/50'
              } ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                </>
              )}
            </button>

            {/* Terms and Privacy (Sign Up only) */}
            {!isLogin && (
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                By creating an account, you agree to our{' '}
                <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Additional Options */}
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-gray-400">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="bg-gray-900 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
              <span>🔗</span>
              <span>Google</span>
            </button>
            <button className="bg-gray-900 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
              <span>👔</span>
              <span>LinkedIn</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 InternTafuta - Your Gateway to Professional Growth</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;