import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 pt-12 pb-6 h-fit  border-t border-t-slate-800">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-lg mb-2 font-poppins font-medium">
              About Us
            </h5>
            <p className="text-grh-screen ay-600">
              Sure, here is a revised version of your request: "You are a
              programming expert who can assist me with coding problems,
              providing clear and easy-to-understand explanations. I would
              appreciate it if you could break down the solutions step by step
              for better understanding."
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-lg mb-2 font-poppins font-medium">
              Quick Links
            </h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  https://ashirvadsingh000.github.io/as_ads/
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  https://ashirvadsingh000.github.io/
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  https://ashirvadsingh000.github.io/root/
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-lg mb-2 font-poppins font-medium">
              Stay Connected
            </h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-facebook-f mr-2" />
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-twitter mr-2" />
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-instagram mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600  shadow-md shadow-cyan-800 text-sm text-center w-screen">
          &copy; 2024 Ashi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
