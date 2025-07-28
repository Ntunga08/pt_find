import React, { useState } from 'react';  // Fix import to include useState

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');                // lowercase "email" for state variable
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  // consistent camelCase

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (isLogin ? false : !confirmPassword)) {
      alert('Please fill in all fields');
      return;
    }
    if (isLogin) {
      // Handle login logic
      console.log('Logging in with', { email, password });
    } else {
      // Handle signup logic
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Signing up with', { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-light-blue-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <input
          type="email"
          value={email}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            value={confirmPassword}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer ml-1"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
