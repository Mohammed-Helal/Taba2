import Btn_Card_i from '/Taba2/src/assets/Btn_Card_i.svg?react'
import React from 'react'
import Card_bg from '@/assets/images/Card_bg.jpg'
import Share_Like from '@/components/Share_Like.jsx'
import { motion } from 'framer-motion'

function Home_Card({ recipe }) {  
  return (
    <div className="bg-[#F7F7F7] rounded-[15px] relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 rounded-[20px]"
        style={{ backgroundImage: `url(${Card_bg})` }}
      />
      <div className="p-[14px] flex flex-col justify-center gap-[32px] relative z-50">
        <div className="self-stretch flex justify-between items-center flex-row-reverse">
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-right text-black text-sg font-[700]">لحم بقري مشوي</span>
            <span className="text-right text-black text-sg font-light">مع البطاطس والفلفل</span>
          </div>
          <Share_Like />
        </div>
        <div>
          <img src={recipe.img_url} alt={recipe.name} className="rounded-[30px]" />
        </div>
        {/* edited line 57: changed to motion.button and added whileHover color change */}
        <motion.button
          whileHover={{ backgroundColor: '#F6B0B8' }}
          className="flex justify-between items-center bg-primary rounded-full pl-1.5 pr-3 py-1 text-white"
        >
          <span className="flex justify-center items-center w-7 h-7 bg-white rounded-full">
            <Btn_Card_i className="w-4 h-4" />
          </span>
          <p className="text-[16px]/[30px]">عرض الوصفة</p>
        </motion.button>
      </div>
    </div>
  )
}

export default Home_Card
