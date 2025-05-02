import React from 'react'
import Recipes_Extra from './Recipe_Extra'

function Recipe_Order() {
  return (
    <>
      <div className='ml-3 text-right bg-white p-[32px] my-4 rounded-[40px] w-[440px] flex flex-col gap-4'></div>
      <div className='lg:ml-[60px] ml-3 text-right bg-white p-[32px] my-4 rounded-[40px] w-[440px] flex flex-col gap-4 h-full'>
        <p className='text-[20px] font-[700]'>الطلب</p>
        <Recipes_Extra />
      </div>
    </>
  )
}

export default Recipe_Order