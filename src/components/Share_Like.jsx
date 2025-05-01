import React from 'react'
import { motion } from 'framer-motion'
import Share from '@/assets/send.svg?react'
import LikeDef from '@/assets/heart_def.svg?react'
import LikeActive from '@/assets/heart_active.svg?react'
import { useState } from 'react'

// Motion-enabled SVGs
const MotionShare = motion(Share)
const MotionLikeDef = motion(LikeDef)
const MotionLikeActive = motion(LikeActive)

function Share_Like() {
  const [liked, setLiked] = useState(false)
  const handleLike = () => setLiked(prev => !prev)
  const handleShare = () => console.log('Share clicked', recipe)

  return (
    <>
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
    </>
  )
}

export default Share_Like