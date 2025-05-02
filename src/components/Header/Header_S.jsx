import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { IoIosSearch } from 'react-icons/io';


function Header_S() {
  const navigate = useNavigate();
  const location = useLocation();

  const linkRefs = {
    contact: useRef(null),
    blog: useRef(null),
    recipe: useRef(null),
    favorites: useRef(null),
    recipes: useRef(null),
  };

  useEffect(() => {
    // Reset all to gray
    Object.values(linkRefs).forEach(ref => {
      if (ref.current) ref.current.classList.remove('text-black');
    });
    // Highlight current
    if (location.pathname === '/Taba2' && linkRefs.recipes.current) {
      linkRefs.recipes.current.classList.add('text-black');
    }
  }, [location.pathname]);

  return (
<div className="px-6 py-4 w-full flex flex-col gap-4 bg-[#E6E6E6] md:hidden">
  
  {/* Top Section: Buttons + Search + Logo */}
  <div className="rounded-[50px] bg-white p-4 flex flex-wrap justify-between items-center gap-4 lg:px-[100px]">
    
    {/* Buttons */}
    <div className="flex space-x-[16px] items-center font-[600]">
      <button
        className="rounded-full bg-primary text-white px-[24px] h-12 py-[8px]"
        onClick={() => navigate('auth/login')}
      >
        تسجيل دخول
      </button>
      <button
        className="text-black"
        onClick={() => navigate('auth/signup')}
      >
        انشاء حساب
      </button>
    </div>

    {/* Search Input */}
    <div className="relative flex flex-row-reverse flex-1 min-w-[200px] max-w-[500px]">
      <IoIosSearch
        className="absolute left-2 top-1/2 -translate-y-1/2 text-[#B0B0B0] rounded-full p-2 cursor-pointer z-10"
        size={40}
      />
      <input
        type="text"
        className="mr-2 pl-12 pr-4 h-10 w-full bg-[#F3F3F6] rounded-full border border-gray-300 placeholder:text-black placeholder:text-[14px] focus:outline-none text-right"
        placeholder="نفسك في ايه؟"
      />
    </div>

    {/* Logo */}
    <Link to="/Taba2">
      <Logo className="h-16 w-16" />
    </Link>
  </div>

  {/* Bottom Section: Navigation Links */}
  <div className="rounded-[50px] py-6 px-4 lg:px-[100px] bg-white">
    <ul className="flex flex-wrap justify-between items-center w-full text-[14px] text-[#B0B0B0] font-[700]">
      <li>
        <Link ref={linkRefs.contact} to="#" className="focus:outline-none hover:text-black">
          تواصل معنا
        </Link>
      </li>
      <li>
        <Link ref={linkRefs.blog} to="#" className="focus:outline-none hover:text-black">
          المدونة
        </Link>
      </li>
      <li>
        <Link ref={linkRefs.recipe} to="#" className="focus:outline-none hover:text-black">
          فصل وصفتك
        </Link>
      </li>
      <li>
        <Link ref={linkRefs.favorites} to="#" className="focus:outline-none hover:text-black">
          المفضلة
        </Link>
      </li>
      <li>
        <Link ref={linkRefs.recipes} to="/Taba2" className="focus:outline-none hover:text-black">
          الوصفات
        </Link>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Header_S