import Btn_Card_i from '/Taba2/src/assets/Btn_Card_i.svg?react'
import React from 'react'
import Card_bg from '@/assets/images/Card_bg.jpg'
import Share_Like from '@/components/Share_Like.jsx'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Home_Card({ recipe }) {  
  const navigate = useNavigate()

  return (
    <div className="bg-[#F7F7F7] rounded-[15px] relative" dir='ltr'>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 rounded-[20px]"
        style={{ backgroundImage: `url(${Card_bg})` }}
      />
      
      <div className="p-[14px] flex flex-col justify-between gap-[24px] relative z-9 h-full min-h-[350px]">
        {/* title and like */}
        <div className="flex justify-between items-start flex-row-reverse flex-wrap gap-3">
          <div className="flex flex-col items-end text-right  break-words xl:max-w-[70%] lg:w-full">
            <p className="text-[18px] font-semibold">{recipe.name}</p>
          </div>
          <Share_Like key= {recipe.id} recipe={recipe}/>
        </div>

        {/* Photo */}
        <div className="flex-grow flex justify-center items-center">
          <img
            src={recipe.img_url}
            alt={recipe.name}
            className="rounded-[30px] max-w-full h-auto"
          />
        </div>

        {/* button */}
        <motion.button
          whileHover={{ backgroundColor: '#F6B0B8' }}
          className="w-full flex justify-between items-center bg-primary rounded-full pl-1.5 pr-3 py-1 text-white"
          onClick={() => navigate(`recipe/${recipe.id}`)}
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
