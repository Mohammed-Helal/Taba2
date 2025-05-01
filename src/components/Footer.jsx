import React from 'react';
import BG from '@/assets/images/Footer_BG.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="bg-black bg-opacity-30">
        <div className="container mx-auto px-4 pt-8 pb-8 text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-2xl font-semibold my-4 tracking-wider ">
            للشكاوي والاقتراحات تواصل معنا
          </h2>

          {/* Email */}
          <a
            href="mailto:Taba2.Recipe@gmail.com"
            className="text-blue-400 hover:text-blue-500 mb-6 inline-block text-lg"
          >
            Taba2.Recipe@gmail.com
          </a>

          {/* Social Row */}
          <div className="flex flex-row-reverse gap-4 items-center justify-center space-x-4 mb-4">
            <span className="hidden md:inline-block">تابعنا على</span>
            <div className='flex flex-row-reverse gap-4 items-center justify-center'>
              <a href="#" className="text-xl hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-xl hover:text-gray-300">
               <FaTwitter />
              </a>
             <a href="#" className="text-xl hover:text-gray-300">
              <FaInstagram />
             </a>
            </div>
          </div>

          <hr className="border-gray-700 mb-6" />

          <p className="text-sm">
            © 2025 <span className="text-blue-400">Taba2</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
