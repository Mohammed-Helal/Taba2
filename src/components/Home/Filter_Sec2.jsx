import React from 'react'
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { LuSettings2 } from "react-icons/lu";

function Filter_Sec() {
  return (
    <>
      <div className='px-[100px] mt-[32px]'>
        <div className='flex text-[20px]/[62px] font[600] gap-2 text-center justify-center items-center'>
          <span>!! اليوم</span>
          <Logo className='size-[40px]'/>
          <span> اختار</span>
        </div>

        <div className='flex-row flex lg:items-center justify-center flex-wrap mt-[32px] gap-[10px] text-[10px] text-black font-bold'>
          <button className='flex text-center items-center whitespace-nowrap gap-2 px-[20px] py-[11px] rounded-full border-[1px] bg-[#E6E6E6] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>وصفات غريبة</p>
          </button>

          <button className='flex text-center items-center whitespace-nowrap gap-2 px-[20px] py-[11px] rounded-full border-[1px] bg-[#E6E6E6] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>وصفات شرقية</p>
          </button>

          <div className="h-10 w-[1px] bg-[#B0B0B0] hidden lg:block"></div>

          <button className='flex text-center items-center gap-2 px-[40px] py-[11px] rounded-full border-[1px] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>تحلية</p>
          </button>

          <button className='flex text-center items-center gap-2 px-[40px] py-[11px] rounded-full border-[1px] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>عشاء</p>
          </button>

          <button className='flex text-center items-center gap-2 px-[40px] py-[11px] rounded-full border-[1px] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>غداء</p>
          </button>

          <button className='flex text-center items-center gap-2 px-[40px] py-[11px] rounded-full border-[1px] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>افطار</p>
          </button>

          <button className='flex text-center items-center whitespace-nowrap gap-2 px-[20px] py-[11px] rounded-full border-[1px] focus:text-white hover:text-white focus:bg-black hover:bg-black'>
            <p>جميع الوصفات</p>
          </button>

          <div className="h-10 w-[1px] bg-[#B0B0B0] hidden lg:block"></div>
 
          <button className='flex text-center items-center gap-2 px-[32px] py-[11px] rounded-full bg-[#E6E6E6] '>
            <LuSettings2 className='w-3 h-3'/>
            <p className=''>فلتر</p>
          </button>
        </div>
      </div>
    </>
  )
}

// export default Filter_Sec