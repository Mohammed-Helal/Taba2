import React from 'react'
import User_bg from '@/assets/images/User_bg.jpg'
import { GoPencil } from "react-icons/go";

function Acount() {
  return (
    <>
      {/* acount */}
      <div className='space-y-4 md:w-full'>
        <div className='text-right'>
          <p className='text-[24px] font-[700]'>الحساب</p>
          <p className='text-gray-400 text-[15px]'>عرض وتحديث معلوماتك الشخصية ومعلومات الاتصال الخاصة بك</p>
        </div>
        {/* User_Date */}
        <div className='text-right relative rounded-[10px] md:bg-white'>
          <div className='absolute inset-0 -z-10 opacity-10 block md:hidden rounded-[10px]'>
            <img src={User_bg} alt="" className="w-full h-full object-cover" />
          </div>
          <div  className='p-[32px]'>
            <p className='text-right text-[24px] font-[600]'>بينانات المستخدم</p>
            <form action="" className='md:flex md:items-center md:justify-start md:gap-8 md:flex-row-reverse'>
              <div className='space-y-2 mt-4 md:mt-0'>
                <p>
                  اسم المستخدم
                </p>
                <input 
                type="text" 
                placeholder='محمد هلال' 
                className='w-full text-[24px] placeholder:text-black placeholder:text-right px-[24px] py-[16px] rounded-md bg-white/0 border-gray-300 border-2 text-right'
                />
              </div>
              <div className='space-y-2'>
                <p>
                  رقم الهاتف
                </p>
                <div className=' relative '>
                  <input 
                  type="رقم الهاتق" 
                  placeholder='01068748795' 
                  className='w-full text-[24px] placeholder:text-black px-[24px] py-[16px] rounded-md bg-white/0 border-gray-300 border-2'
                  />
                  <GoPencil className=' absolute text-[24px] top-7 text-gray-500 right-6'/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Acount