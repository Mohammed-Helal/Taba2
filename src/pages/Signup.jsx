import React from 'react'
import Img_Sec from '../components/Auth/Img_Sec';
import Signup_Sec from '../components/Auth/Signup_Sec';
import Signup_bg from "@/assets/images/Signup_bg.png"

function Signup() {
  return (
    <>
      <div style={{backgroundImage: `url(${Signup_bg})`}} className='bg-[#E6E6E6] flex justify-center items-center lg:justify-between py-[32px] px-[24px] h-screen w-f'>

        {/* img section */}
        <Img_Sec />

        {/* Signup */}
        <Signup_Sec />
      </div>
    </>
  )
}

export default Signup