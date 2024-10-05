import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams(); // Get the username from the URL
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the username from local storage in case the user refreshes the page
    const storedName = localStorage.getItem('currentUser');
    if (storedName) {
      setUserName(JSON.parse(storedName));
    } else {
      setUserName(username);
    }
  }, [username]);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-gray-700">
        Welcome, {userName || 'User'}!
      </h1>
      <p className="text-gray-600 mt-4">This is your profile page.</p>
    </div>
  );
};

export default UserProfile;
