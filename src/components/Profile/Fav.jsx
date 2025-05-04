import React from 'react'
import Home_Card from '@/components/Recipe/Home_Card.jsx'
import { useSelector } from 'react-redux'

function Fav() {
  const recipes = useSelector((state) => state.global.Fav)
  console.log(recipes) 

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
            {
              recipes.map((recipe) =>{
                <Home_Card key={recipe.id} recipe= {recipe} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Fav