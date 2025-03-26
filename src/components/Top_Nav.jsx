import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Top_Nav = () => {
  return (
    <>
        <ul className='grid grid-rows-2 grid-flow-col gap-10 lg:grid-rows-1 justify-items-center'>
            <li className="order-2 lg:order-1">
                <a href="#" className='text-white text-lg'>من نحن</a>
            </li>
            <li className="order-1 lg:order-2">
                <a href="#" className='text-white text-lg'>وصفاتي</a>
            </li>
            <li className="order-4 lg:order-3 text-white text-lg flex items-center gap-2">
                <AiOutlineSearch className="relative top-[2px]" />
                <a href="#">ابحث عن وصفاتي</a>
            </li>
            <li className="order-3 lg:order-4">
                <a href="#" className='text-white text-lg'>تسجيل الدخول</a>
            </li>
        </ul>
    </>
  )
}

export default Top_Nav