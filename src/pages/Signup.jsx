import React from 'react'
import Signup_bg from "@/assets/images/Signup_bg.png"
import Signup_img from "@/assets/images/Signup_img.jpg"
import Logo from "@/assets/Logo_1.svg?react"
import { FaArrowLeftLong } from "react-icons/fa6"; 
import { Link } from 'react-router-dom';

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiLock } from "react-icons/ci";

function Signup() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div style={{backgroundImage: `url(${Signup_bg})`}} className='bg-[#E6E6E6] flex justify-between py-[32px] px-[24px] h-screen '>

        {/* img section */}
        <div className='relative pt-[32px] px-[32px] flex flex-col pb-[56px] rounded-[40px] h-full w-[60%]'>
            {/* img */}
            <img
              src={Signup_img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-[40px]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-[40px] z-0"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className='flex justify-between'>
                <button className='whitespace-nowrap text-[13px]/[32px] font-[400] flex items-center gap-[10px] bg-black/25 rounded-[50px] px-[27px] py-[4px] text-white'>
                  <FaArrowLeftLong />
                  العودة للتصفح
                </button>
                <Logo />
              </div>

              <div className="flex justify-center h-full items-end">
                <div className='w-[370px] flex flex-col gap-[50px] items-center text-center'>
                  <p className='text-white text-[40px]/[52px] w-[370px]'>اطلب منتجات طازجة وصحية</p>
                  <div className='w-[80px] h-[10px] rounded-[20px] bg-white'></div>
                </div>
              </div>
            </div>
          </div>


        {/* Signup */}
        <div className='w-[38%] flex flex-col justify-center items-end bg-white px-[64px] py-[104px] rounded-[40px] gap-[32px]'>
          <div>
            <h3 className='text-[48px]/[51px] font-[600]'>انشاء حساب</h3>
            <p className='text-[14px]/[51px]'>هل لديك حساب بالفعل؟ <Link className='text-blue-500'>تسجيل الدخول</Link></p>
          </div>

          <form action="" className='flex flex-col gap-[18px]'>
            <div className='relative text-[16px]/[30px] font-[400]'>
              <CiUser className='absolute right-[32px] top-1/2 transform -translate-y-1/2 '/>
              <input type="text" placeholder='اسم المستخدم' className='px-[66px] rounded-[20px] py-[3%] placeholder:text-right bg-[#D9D9D9]'/>
            </div>
            <div className='relative text-[16px]/[30px] font-[400]'>
              <MdOutlineLocalPhone className='absolute right-[32px] top-1/2 transform -translate-y-1/2 '/>
              <input type="text" placeholder='رقم الهاتف' className='px-[66px] rounded-[20px] py-[3%] placeholder:text-right bg-[#D9D9D9]'/>
            </div>
            <div className='relative text-[16px]/[30px] font-[400]'>
              <CiLock className='absolute right-[32px] top-1/2 transform -translate-y-1/2 '/>
              <input type="text" placeholder='كلمة المرور' className='px-[66px] rounded-[20px] py-[3%] placeholder:text-right bg-[#D9D9D9]'/>
            </div>
            <div className='relative text-[16px]/[30px] font-[400]'>
              <CiLock className='absolute right-[32px] top-1/2 transform -translate-y-1/2 '/>
              <input type="text" placeholder='تأكيد كلمة المرور' className='px-[66px] rounded-[20px] py-[3%] placeholder:text-right bg-[#D9D9D9]'/>
            </div>
          </form>

          <div className='flex items-center gap-2 mt-2'>
            <p>أوافق على <Link className='text-blue-500'>الشروط والأحكام</Link></p>
            <button
            onClick={() => setChecked(!checked)}
            className={`size-[18px] rounded-[5px] border-2 flex items-center justify-center transition-all duration-300 ${
              checked ? "bg-primary border-primary" : "bg-white border-gray-400"
            }`}
            >
              {checked && <FaCheck className="text-white text-sm" />}
            </button>
          </div>

          <button className='flex items-center gap-2 bg-primary text-white text-[18px]/[32px] font-[400] px-[21%] py-[3%] rounded-[20px]'>
            <HiOutlineUserAdd />
            <p>انشاء حساب</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Signup