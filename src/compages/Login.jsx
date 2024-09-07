import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full shadow-cyan-400 hover:shadow-red-400">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form>
          {/* Username/Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              {isLogin ? 'Email' : 'Username'}
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                id="email"
                placeholder={isLogin ? 'Email' : 'Username'}
                className="bg-gray-100 outline-none w-full"
              />
            </div>
          </div>

          {/* Email Field for Signup */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none w-full"
                />
              </div>
            </div>
          )}

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-gray-100 outline-none w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="bg-blue-500 hover:border-2 hover:border-blue-500 text-white hover:text-blue-500 hover:bg-white font-bold py-2 px-4 rounded w-full">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          {/* Toggle between Login and Signup */}
          <div className="mt-4 text-center">
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 ml-1 hover:underline hover:text-red-400"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
