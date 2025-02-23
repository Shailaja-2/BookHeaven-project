// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-zinc-800 text-white px-8 py-4">
//       <h1 className="text-xl font-semibold text-center">
//         &copy; 2025, Made by shailaja
//       </h1>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-gray-800 px-4 md:px-16 lg:px-28 py-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>About Us</h2>
          <p className='text-gray-300'>
            This is dedicated to providing the best products and services to our customers.
          </p>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>Quick Links</h2>
          <ul>
            <li><a href='' className='hover:underline text-gray-300'>Home</a></li>
            <li><a href='' className='hover:underline text-gray-300'>Services</a></li>
            <li><a href='' className='hover:underline text-gray-300'>Contact</a></li>
            <li><a href='' className='hover:underline text-gray-300'>About</a></li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>Follow </h2>
          <ul className='flex space-x-4'>
            <li>
              <FaFacebook className='text-blue-500' />
              <a href='' className='hover:underline text-gray-300'>
                Facebook
                </a>
            </li>
            <li>
              <FaTwitter className='text-sky-500' />
              <a href='' className='hover:underline text-gray-300'>
                Twitter
                </a>
            </li>
            <li>
              <FaInstagram className='text-blue-500' />
              <a href='' className='hover:underline text-gray-300'>
                Instagram
                </a>
            </li>
        
          </ul>
        </div>
      </div>
      <div className='border-gray-600 border-t pt-6 text-gray-300 text-center mt-6'>
        <p>&copy; 2025, Designed by Shailaja. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
