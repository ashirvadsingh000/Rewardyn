import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isEmailTaken = existingUsers.some((user) => user.email === email);

    if (isEmailTaken) {
      setError('Email is already taken');
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    setError('');
    alert('Signup successful! Please log in.');

    // Navigate to login page after successful signup
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <FaUserAlt className="text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>

      {/* Link to navigate back to the login page */}
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-indigo-500 ml-2 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
