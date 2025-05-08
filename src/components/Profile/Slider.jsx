import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { useLocation , useNavigate } from 'react-router-dom';
import { Click_Profile } from '../../Store/Slices/globalSlice';
import { logout } from '@/Store/Slices/authSlice'
import { logout_1 } from '@/API/authApi'
import Cookies from "js-cookie";

function Slider() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const isProfileSlider = useSelector((state) => state.global.isProfileSlider)

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
    Cookies.remove("id")
    navigate("/Taba2");
    window.location.reload();
  };

  return (
    <>
      {/* slide_bar */}
      <div
        className={`
          fixed top-0 text-right p-[24px] right-0 z-50 h-full w-[400px] bg-white shadow-lg transform transition-transform duration-300 space-y-4
          ${isProfileSlider ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className='flex items-center gap-2 justify-end'>
          <div className=''>
            <p className='text-[20px] font-[600]'>أهلا محمد هلال</p>
            <p className='text-[16px] font-[300]'>01068748795</p>
          </div>
          <CiUser className='bg-[#B0B0B0] text-white size-[55px] rounded-full p-2'/>
        </div>
        <div className='space-y-1'>
          <button 
          className={`flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200 ${isAcount && 'bg-[#F6B0B8]'}`}
          onClick={() => {
            navigate('/Taba2/Profile/acount')
            dispatch(Click_Profile())
          }}
          >
            <p>الحساب</p>
            <FaUser className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
          </button>
          <button 
          className={`flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200 ${isFav && 'bg-[#F6B0B8]'}`}
          onClick={() =>{
            navigate('/Taba2/Profile/fav')
            dispatch(Click_Profile())
          }}
          >
            <p>المفضله</p>
            <FaHeart className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
          </button>
          <button 
          className='flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200'
          >
            <p>الأمان</p>
            <IoIosLock className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
          </button>
          <button 
          className='flex justify-end items-center gap-3 w-full rounded-[40px] p-[10px] hover:bg-[#F6B0B8] duration-200'
          onClick={handleLogout}
          >
            <p>تسجيل الخروج</p>
            <IoLogOutSharp className='rounded-full border-2 border-black p-1 size-[24px] fill-primary '/>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider