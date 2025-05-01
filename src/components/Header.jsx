import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { IoIosSearch } from 'react-icons/io';

export default function Header() {
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
    <nav className="whitespace-nowrap grid grid-cols-2 lg:flex lg:justify-between px-2 md:px-[70px] lg:px-[100px] py-[22px] items-center">
      <div className="flex space-x-[16px] items-center order-1 lg:col-span-3 font-[600]">
        <button
          className="rounded-full bg-primary text-white px-[24px] h-12 py-[8px] text-[12px]"
          onClick={() => navigate('login')}
        >
          تسجيل دخول
        </button>
        <button
          className="text-black text-[12px]/[14px]"
          onClick={() => navigate('signup')}
        >
          انشاء حساب
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-[50px] justify-center items-center order-3 lg:order-2 w-full col-span-2 lg:col-span-3 mt-[16px] lg:mt-0 text-[13px] text-[#B0B0B0] font-[700]">
        <ul className="flex justify-center items-center gap-[30px] w-full pt-1">
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

      {/* Search & Logo */}
      <div className="flex justify-center items-center order-2 lg:order-3 lg:col-span-2">
        <div className="relative w-full lg:w-40 flex flex-row-reverse">
  
          <IoIosSearch
            className="hidden sm:inline absolute left-2 top-1/2 -translate-y-1/2 text-[#B0B0B0] rounded-full p-2 cursor-pointer z-10"
            size={40}
          />
          <input
            type="text"
            className="hidden sm:block w-full pl-12 pr-4 h-10 bg-[#F3F3F6] rounded-full border border-gray-300 text-sm placeholder:text-black placeholder:text-[12px] focus:outline-none text-right"
            placeholder="نفسك في ايه؟"
          />
          {/* Mobile-only button */}
          <button
            className="sm:hidden inset-0 flex justify-center items-center"
            aria-label="Search"
          >
            <div className="bg-primary p-2 rounded-full">
              <IoIosSearch className="text-white" size={20} />
            </div>
          </button>
        </div>
        <Link to="/Taba2">
          <Logo className="h-16 w-16 sm:ml-4 ml-8" />
        </Link>
      </div>
    </nav>
  );
}
