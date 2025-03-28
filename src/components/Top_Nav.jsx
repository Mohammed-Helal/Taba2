import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Top_Nav = () => {
  return (
    <>
        <ul className='grid grid-rows-2 grid-flow-col gap-14 md:grid-rows-1 justify-items-center text-[14px]'>
            <li className="order-2 md:order-1">
                <a href="#" className='text-white'>من نحن</a>
            </li>
            <li className="order-1 md:order-2">
                <a href="#" className='text-white'>وصفاتي</a>
            </li>
            <li className="order-4 md:order-3 text-white flex items-center gap-2">
                <AiOutlineSearch className="relative top-[2px]" />
                <a href="#">ابحث عن وصفاتي</a>
            </li>
            <li className="order-3 md:order-4">
                <a href="#" className='text-white'>تسجيل الدخول</a>
            </li>
        </ul>
    </>
  )
}

export default Top_Nav