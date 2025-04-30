import React from 'react'
import banner from '@/assets/images/Home.png'

function Banner() {
  return (
    <>
        <div className='px-[100px] mt-[32px] justify-center items-center hidden md:block'>
            <img src={banner} alt="" />
        </div>
    </>
  )
}

export default Banner