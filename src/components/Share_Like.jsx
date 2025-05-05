import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import Share from '@/assets/send.svg?react'
import LikeDef from '@/assets/heart_def.svg?react'
import LikeActive from '@/assets/heart_active.svg?react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToFav, is_Fav, DeleteFev } from '../Store/Slices/fevSlice'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

// Motion-enabled SVGs
const MotionShare = motion(Share)
const MotionLikeDef = motion(LikeDef)
const MotionLikeActive = motion(LikeActive)

function Share_Like({recipe}) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = recipe?.id;
  const token = Cookies.get('token');
  const user = useSelector((state) => state.auth.user);

  // Check if the recipe is already a favorite
  useEffect(() => {
    if (token && id && user) {
      dispatch(is_Fav({ token, id }))
        .then((res) => {
          if (res.payload === true) setLiked(true);
        })
        .catch((err) => {
          console.error('Error checking favorite:', err);
        });
    }
  }, [dispatch, token, id, user]);

  const handleShare = () => {
    console.log('Share clicked:', recipe);
  };

  const handleLike = () => {
    // Redirect to login if user is not logged in
    if (!user) {
      navigate('/Taba2/auth/login');
      return;
    }

    setLiked((prev) => {
      const newLiked = !prev;

      if (newLiked) {
        dispatch(AddToFav({ token, id }));
      } else {
        dispatch(DeleteFev({ token, id }));
      }

      return newLiked;
    });
  };


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