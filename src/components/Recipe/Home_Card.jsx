import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Btn_Card_i from '/Taba2/src/assets/Btn_Card_i.svg?react'
import Share from '@/assets/send.svg?react'
import LikeDef from '@/assets/heart_def.svg?react'
import LikeActive from '@/assets/heart_active.svg?react'
import Card_bg from '@/assets/images/Card_bg.jpg'

// Motion-enabled SVGs
const MotionShare = motion(Share)
const MotionLikeDef = motion(LikeDef)
const MotionLikeActive = motion(LikeActive)

function Home_Card({ product }) {
  const [liked, setLiked] = useState(false)
  const handleLike = () => setLiked(prev => !prev)
  const handleShare = () => console.log('Share clicked', product)
  
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
          <div className="flex gap-4 relative">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share recipe"
              onMouseDown={e => e.preventDefault()}
            >
              <MotionShare className="w-6 h-6" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
            </button>
            <button
              type="button"
              onClick={handleLike}
              aria-label={liked ? 'Unlike' : 'Like'}
              className={`relative w-7 h-7`}
              onMouseDown={e => e.preventDefault()}
            >
              <MotionLikeDef
                className="absolute inset-0 w-7 h-7"
                whileHover={{ scale: liked ? 1.6 : 1.1 }}
                animate={{ opacity: liked ? 0 : 1, zIndex: liked ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <MotionLikeActive
                className="absolute inset-0 w-7 h-7"
                whileHover={{ scale: liked ? 1.3 : 1.1 }}
                animate={{ opacity: liked ? 1 : 0, zIndex: liked ? 1 : 0, scale: liked ? 1.2 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </button>
          </div>
        </div>
        <div>
          <img src={product.thumbnail} alt="" className="rounded-[30px]" />
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
