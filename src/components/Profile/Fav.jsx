import React, { useEffect, useState } from 'react'
import Home_Card from '@/components/Recipe/Home_Card.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllFav } from '../../Store/Slices/fevSlice'
import { getAuthCookies } from '@/Utils/auth.util.js'

function Fav() {
  const dispatch = useDispatch()
  const isFav = useSelector((state) => state.Fav.isClick)
  

  useEffect(() => {
    const getCookies = getAuthCookies();
    dispatch(fetchAllFav(getCookies.token))
  }, [isFav]);
  
  const favRecipes = useSelector((state) => state.Fav.AllFav)

  return (
    <>
      <div className='w-full text-right space-y-2 p-[32px]'>
        {/* Top */}
        <div className='text-right'>
          <p className='text-[24px] font-[700]'>المفضلة</p>
          <p className='text-gray-400 text-[15px]'>تصفح وصفاتك المفضلة</p>
        </div>
        <div className='bg-white p-[32px] rounded-[40px] space-y-4'>
          <p className='text-[24px] font-[500]'>الوصفات المفضلة</p>
          <div className='h-full gap-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' dir='rtl'>
            {
              favRecipes.map((recipe) =>{
                return <Home_Card key={recipe.id} recipe= {recipe.recipe} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Fav