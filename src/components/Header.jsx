import React from 'react'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { IoIosSearch } from "react-icons/io";

function Header() {
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
    if (location.pathname === "/Taba2") {
      linkRefs.recipes.current.focus();
    }
  }, []);

  return (
    <>
        <nav className='grid grid-cols-2 lg:grid-cols-8 px-2 md:px-[70px] lg:px-[100px] py-[22px]'>
            <div className='flex space-x-[16px]  order-1 lg:col-span-3'>
                <button 
                className='rounded-full bg-primary text-white px-[16px] py-[8px] text-[12px]/[14px] font-[600]'
                onClick={() => navigate('login')}
                >
                  تسجيل دخول
                </button>
                <button 
                className='text-black text-[12px]/[14px] font-[600]'
                onClick={() => navigate('signup')}
                >
                  انشاء حساب
                </button>
            </div>

            <div className='flex gap-[50px] justify-center items-center order-3 lg:order-2 w-full col-span-2 lg:col-span-3 mt-[16px] lg:mt-0'>
                <ul className='flex justify-center items-center text-[13px] gap-[30px] pt-[10px] text-[#B0B0B0] font-[700] w-full'>
                  <li>
                    <Link ref={linkRefs.contact} to="#" className='focus:text-black hover:text-black focus:outline-none'>تواصل معنا</Link>
                  </li>
                  <li>
                    <Link ref={linkRefs.blog} to="#" className='focus:text-black hover:text-black focus:outline-none'>المدونة</Link>
                  </li>
                  <li>
                    <Link ref={linkRefs.recipe} to="#" className='focus:text-black hover:text-black focus:outline-none'>فصل وصفتك</Link>
                  </li>
                  <li>
                    <Link ref={linkRefs.favorites} to="#" className='focus:text-black hover:text-black focus:outline-none'>المفضلة</Link>
                  </li>
                  <li>
                    <Link ref={linkRefs.recipes} className='focus:text-black focus:outline-none hover:text-black' to="/Taba2">الوصفات</Link>
                  </li>
                </ul>
            </div>

            <div className='flex justify-center items-center gap-3 md:gap-[50px] order-2 lg:order-3 lg:col-span-2'>
              <div className='relative'>
                <IoIosSearch
                dir="rtl" 
                className='absolute rounded-full bg-primary text-white items-center top-1/2 transform -translate-y-1/2 left-[10px] p-1 size-[25px]'
                />
                <input 
                type="text"
                className='bg-[#F3F3F6] focus:outline-none rounded-full border-[0.5px] text-right placeholder:text-right py-[6px] px-[10px] placeholder:text-[13px] placeholder:text-black' 
                placeholder='نفسك في ايه؟'/>
              </div>
              <Link to={"/Taba2"}><Logo className="h-10 w-10" /></Link>
            </div>
        </nav>
    </>
  )
}

export default Header