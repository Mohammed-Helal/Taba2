import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Store/Slices/authSlice'
import { logout_1 } from '../API/authApi'
import Cookies from "js-cookie";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Slider from '../components/Profile/Slider';
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";


function Profile() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  
  const isAcount = location.pathname === '/Taba2/Profile/acount'
  const isFav = location.pathname === '/Taba2/Profile/fav'

  const handleLogout = async () => {
    try {
      await logout_1();
    } catch (err) {
      console.error("Logout API error:", err);
    }
    dispatch(logout());
    Cookies.remove("token");
    navigate("/Taba2");
    window.location.reload();
  };
  
  return (
    <>{ user && 
      <div className={`mx-[60px] ${!isFav && 'h-screen'}`}>
        <div className="fixed inset-0 bg-[#E6E6E6] -z-10"/>

        <Slider />

        <div className='flex justify-center gap-[32px]'>
          
          <Outlet />

          {/* Right Section */}
          <div className={`space-y-[16px] md:w-[440px] mt-[16px] hidden md:block ${isFav && "p-4"}`}>
            <div className='rounded-[40px] flex items-start gap-2 justify-end bg-white p-[24px]'>
              <div className=''>
                <p className='text-[20px] font-[600] whitespace-nowrap'>أهلا محمد هلال</p>
                <p className='text-[16px] font-[300] text-gray-400 text-right'>01068748795</p>
              </div>
              <CiUser className='bg-[#B0B0B0] text-white size-[55px] rounded-full p-2'/>
            </div>
            <div className='bg-white rounded-[40px] p-[24px] w-full space-y-1'>
              <button 
              className={`flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200 ${isAcount && "bg-[#F6B0B8]"}`}
              onClick={() => navigate('/Taba2/Profile/acount')}
              >
                <p>الحساب</p>
                <FaUser className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
              </button>
              {/* fav */}
              <button 
              className={`flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200 ${isFav && "bg-[#F6B0B8]"}`}
              onClick={() => navigate('/Taba2/Profile/fav')}
              >
                <p>المفضله</p>
                <FaHeart className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
              </button>
              {/* security */}
              <button 
              className='flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200'
              >
                <p>الأمان</p>
                <IoIosLock className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
              </button>
              {/* logout */}
              <button 
              className='flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200'
              onClick={handleLogout}
              >
                <p>تسجيل الخروج</p>
                <IoLogOutSharp className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
              </button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Profile