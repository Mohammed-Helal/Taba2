import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { IoIosSearch } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { IoMdList } from "react-icons/io";
import { Click_Profile } from '../../Store/Slices/globalSlice';

function Header_S() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user)
  
  const isProfilePage = location.pathname
  
  const isProfileSlider = useSelector((state) => state.global.isProfileSlider)
  

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
    if (location.pathname === '/Taba2/Profile/fav' && linkRefs.favorites.current) {
      linkRefs.favorites.current.classList.add('text-black');
    }
  }, [location.pathname]);

  return (
    <div className="px-6 py-4 w-full flex flex-col gap-4 bg-[#E6E6E6] md:hidden">
      {/* Top Section: Buttons + Search + Logo */}
      <div className="rounded-[50px] bg-white p-4 flex flex-wrap justify-between items-center gap-4 lg:px-[100px]">
        
        {/* Buttons */}
        {
        !user?
        <div className="flex space-x-[16px] items-center font-[600] text-[12px]">
          <button
            className="rounded-full bg-primary text-white px-[8px] h-12 py-[8px] text-[12px] hover:bg-[#F6B0B8]"
            onClick={() => navigate('auth/login')}
          >
            تسجيل دخول
          </button>
          <button
            className="text-black text-[12px]/[14px] hover:bg-[#F6B0B8] px-[8px] h-12 py-[8px] rounded-full"
            onClick={() => navigate('auth/signup')}
          >
            انشاء حساب
          </button>
        </div>
        :
        <div
        className="flex space-x-[16px] items-center lg:col-span-3 font-[600]  text-white text-[16px]"
        >
          {isProfilePage.includes('Profile') &&
            <button 
            className={`hover:text-[#F6B0B8] ${isProfileSlider? 'text-[#F6B0B8]': 'text-primary'} text-primary text-[30px]`}
            onClick={() => dispatch(Click_Profile())}
            >
              <IoMdList />
            </button>
          }
          <button className='bg-primary rounded-full p-3 hover:bg-[#F6B0B8]' onClick={() => navigate('/Taba2/cart')}>
            <SlHandbag />
          </button>
          {!isProfilePage.includes('Profile') &&
          <button className='bg-primary rounded-full p-3 hover:text-[#F6B0B8]' onClick={() => navigate('/Taba2/Profile/acount')}>
            <FaRegUser />
          </button>
          }
        </div>
        }

      
        {/* Search Input */}
        <div className="relative flex flex-1 max-w-[500px]">
          <input
            type="text"
            className="mr-2 pl-12 pr-4 h-10 w-full bg-[#F3F3F6] rounded-full border border-gray-300 placeholder:text-black placeholder:text-[12px] focus:outline-none text-right"
            placeholder="نفسك في ايه؟"
          />
          <IoIosSearch
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#B0B0B0] rounded-full p-2 cursor-pointer z-10"
            size={40}
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
            <Link ref={linkRefs.favorites} to={user?'/Taba2/Profile/fav' : '/Taba2/auth/login'} className="focus:outline-none hover:text-black">
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