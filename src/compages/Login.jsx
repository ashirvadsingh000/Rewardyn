import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find((user) => user.email === email && user.password === password);

    if (!user) {
      setError('Invalid email or password');
      return;
    }

    setError('');
    alert(`Welcome back, ${user.name}!`);
    // Proceed with further actions, like redirecting to dashboard
     // Redirect to home page after successful login
     navigate(`/user/${user.name}`);
     navigate('/rootp');
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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

      <div className="mb-6">
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

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
