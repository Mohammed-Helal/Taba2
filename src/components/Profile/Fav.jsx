import React, { useEffect, useState } from 'react'
import Home_Card from '@/components/Recipe/Home_Card.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllFav } from '../../Store/Slices/fevSlice'
import { getAuthCookies } from '@/Utils/auth.util.js'

function Fav() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCookies = getAuthCookies();
    dispatch(fetchAllFav(getCookies.token))
  }, [dispatch]);
  


  // console.log(favRecipes)
  return (
    <>
      <div>
        {/* Top */}
        <div className='text-right'>
          <p className='text-[24px] font-[700]'>المفضلة</p>
          <p className='text-gray-400 text-[15px]'>تصفح وصفاتك المفضلة</p>
        </div>
        <div>
          <p className='text-[24px] font-[500]'>الوصفات المفضلة</p>
          <div>
            {/* {
              favRecipes.map((recipe) =>{
                return <Home_Card key={recipe.id} recipe= {recipe} />
              })
            } */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Fav