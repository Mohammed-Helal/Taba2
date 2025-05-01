import React from 'react'
import Img_Sec from '../components/Auth/Img_Sec'
import Login_Sec from '../components/Auth/Login_Sec'
import Signup_bg from '@/assets/images/Signup_bg.png'

function Login() {
  return (
    <>
      <div  style={{backgroundImage: `url(${Signup_bg})`}} className='bg-[#E6E6E6] flex justify-center items-center lg:justify-between py-[32px] px-[24px] h-screen w-f'>
        <Img_Sec />
        <Login_Sec />
      </div>
    </>
  )
}

export default Login