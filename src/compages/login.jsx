import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-wrap justify-center">
      { /* Box 1 */ }
      <div className="w-48 h-48 bg-gray-200 rounded-md m-4 p-4 flex justify-center items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322" alt="Image 1" className="w-full h-full object-cover rounded-md" />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">Button 1</button>
      </div>

      { /* Box 2 */ }
      <div className="w-48 h-48 bg-gray-200 rounded-md m-4 p-4 flex justify-center items-center">
        <img src="image2.jpg" alt="Image 2" className="w-full h-full object-cover rounded-md" />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">Button 2</button>
      </div>

      { /* Box 3 */ }
      <div className="w-48 h-48 bg-gray-200 rounded-md m-4 p-4 flex justify-center items-center">
        <img src="image3.jpg" alt="Image 3" className="w-full h-full object-cover rounded-md" />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">Button 3</button>
      </div>

      ...

      { /* Box 20 */ }
      <div className="w-48 h-48 bg-gray-200 rounded-md m-4 p-4 flex justify-center items-center">
        <img src="image20.jpg" alt="Image 20" className="w-full h-full object-cover rounded-md" />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">Button 20</button>
      </div>
    </div>
  );
};

export default Login;