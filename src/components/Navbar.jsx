import React from 'react'
import { LuAlignRight } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { MdQuestionMark } from "react-icons/md";
import { MdShare } from "react-icons/md";

function Navbar() {
  return (
    <>
      <nav className = "bg-gradient-to-b from-secondary to-primary h-screen w-[65px] p-4 absolute right-0">
        <div className='absolute top-0 w-full left-0 h-full bg-white opacity-20'></div>
        <ul className='flex flex-col justify-items-center space-y-[60px]'>
          <li>
            <a href="#" >
              <LuAlignRight className="text-white w-8 h-8 cursor-pointer"/>
            </a>
          </li>

          <li className='grid gap-5 text-white text-[14px]'>
            <a href="#" className='border-2 border-white rounded-full p-1 flex items-center justify-center w-8 h-8'><FaFacebookF/></a>
            <a href="#" className='border-2 border-white rounded-full p-1 flex items-center justify-center w-8 h-8'><CiInstagram/></a>
            <a href="#" className='border-2 border-white rounded-full p-1 flex items-center justify-center w-8 h-8'><FaXTwitter/></a>
          </li>


          <li>
            <p className="w-[38px] h-[1px] bg-white"></p>
            <a href="#"><BsCart3 className='text-white text-[30px] cursor-pointer mt-8 scale-x-[-1]'/></a>
          </li>

          <li className='font-cairo text-white flex flex-col space-y-5 text-[20px]'>
            <a href='#' className='rotate-[270deg]'>تواصل</a>
            <a href='#' className='rotate-[270deg]'>معنا</a>
          </li>

          <li>
            <a href="#" className='border-2 border-white rounded-full flex items-center justify-center text-white text-[14px] p-1 mt-3 w-8 h-8'><MdQuestionMark/></a>
            <a href="#" className='border-2 border-white rounded-full flex items-center justify-center text-white text-[14px] p-1 mt-3 w-8 h-8'><MdShare/></a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar