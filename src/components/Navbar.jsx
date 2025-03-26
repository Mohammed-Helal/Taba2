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
      <nav className = "bg-gradient-to-b from-secondary to-primary h-screen w-[75px] p-4 absolute right-0">
        <div className='absolute top-0 w-full left-0 h-full bg-white opacity-20'></div>
        <ul className='flex-col justify-items-center'>
          <li>
            <a href="#" >
              <LuAlignRight className="text-white w-8 h-8 cursor-pointer"/>
            </a>
          </li>

          <li className='mt-[60px] grid gap-10  text-white text-[14px]'>
            <a href="#" className='border-2 border-white rounded-full p-1 flex items-center justify-center'><FaFacebookF/></a>
            <a href="#" className='border-2 border-white rounded-full p-1 flex items-center justify-center'><CiInstagram/></a>
            <a href="#" className='border-2 border-white rounded-full p-1 flex items-center justify-center'><FaXTwitter/></a>
          </li>

          <p className="w-[38px] h-[1px] bg-white mt-[50px]"></p>

          <li>
            <a href="#"><BsCart3 className='text-white text-[30px] cursor-pointer mt-8 scale-x-[-1]'/></a>
          </li>

          <li className='font-cairo rotate-[270deg] text-white flex justify-between mt-[80px] text-[20px]'>
            <a href='#' className='mr-2'>معنا</a>
            <a href='#'>تواصل</a>
          </li>

          <li className='mt-[80px]'>
            <a href="#" className='border-2 border-white rounded-full flex items-center justify-center text-white text-[14px] p-1 mt-3'><MdQuestionMark/></a>
            <a href="#" className='border-2 border-white rounded-full flex items-center justify-center text-white text-[14px] p-1 mt-3'><MdShare/></a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar