import React from 'react'
import Recipe_Data from '../components/Recipe/Recipe_Data'
import Recipe_Order from '../components/Recipe/Recipe_Order'

function Recipe() {
  return (
    <>
      <div className='bg-[#E6E6E6] absolute w-full h-full -z-50 mt-[-110px]'></div>
      <div className='flex justify-center gap-4'>
        <Recipe_Order />
        <Recipe_Data />
      </div>
    </>
  )
}

export default Recipe