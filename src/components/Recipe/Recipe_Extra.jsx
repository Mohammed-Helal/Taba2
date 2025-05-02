import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import Catshap from '@/assets/images/Catshap.png'

function Recipe_Extra() {
  return (
    <>
      <div className='text-right text-[16px]/[19px] border-dashed border-gray-400 border-2 rounded-[10px] p-[10px] flex items-center justify-between gap-2'>
        <div className='w-full'>
          <p>كاتشب حار</p>
          <p className='text-[12px] text-gray-500'>50 gm</p>
          <div className='text-primary flex items-center justify-between'>
            <FaCirclePlus className='text-black'/>
            <p dir="rtl">10 ج.م</p>
          </div>
        </div>
        <img src={Catshap} alt="" />
      </div>
    </>
  )
}

export default Recipe_Extra