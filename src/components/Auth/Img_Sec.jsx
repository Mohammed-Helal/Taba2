import React from 'react'
import Signup_img from "@/assets/images/Signup_img.jpg"
import Logo from "@/assets/Logo_1.svg?react"
import { FaArrowLeftLong } from "react-icons/fa6"; 
import { useNavigate } from 'react-router-dom'

function Img_Sec() {
    const navigate = useNavigate()

    return (
    <>
        <div className='relative pt-[32px] px-[32px] hidden lg:flex flex-col pb-[56px] rounded-[40px] h-full w-[60%]'>
            {/* img */}
            <img
                src={Signup_img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-[40px]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-[40px] z-0"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className='flex justify-between'>
                    <button 
                    className='whitespace-nowrap text-[13px]/[32px] font-[400] flex items-center gap-[10px] bg-black/25 rounded-[50px] px-[27px] py-[4px] text-white'
                    onClick={() => navigate('/Taba2')}
                    >
                        <FaArrowLeftLong />
                        العودة للتصفح
                    </button>
                    <Logo />
                </div>

                <div className="flex justify-center h-full items-end">
                    <div className='w-[370px] flex flex-col gap-[50px] items-center text-center'>
                        <p className='text-white text-[40px]/[52px] w-[370px]'>اطلب منتجات طازجة وصحية</p>
                        <div className='w-[80px] h-[10px] rounded-[20px] bg-white'></div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Img_Sec