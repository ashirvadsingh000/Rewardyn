import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">{isLogin ? 'Login' : 'Sign Up'}</h2>
        </div>

        {isLogin ? <Login /> : <Signup />}

        <div className="text-center mt-4">
       
        </div>
      </div>
    </div>
  );
};

export default Auth;
