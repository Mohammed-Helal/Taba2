import React from 'react'
import Btn_Card_i from '/Taba2/src/assets/Btn_Card_i.svg?react'
import Card_bg from '@/assets/images/Card_bg.jpg'

function Home_Card({product}) {
  return (
    <>
        <div className='bg-[#F7F7F7] bg-(image:<custom-property>) rounded-[15px] relative'>
            <div 
                className='absolute inset-0 bg-cover bg-center opacity-40 rounded-[20px]' 
                style={{ backgroundImage: `url(${Card_bg})` }}
            />
            <div className='p-[14px] flex flex-col justify-center gap-[32px] relative z-50'>
                <div className='self-stretch inline-flex justify-between items-center'>
                    <div className='inline-flex flex-col justify-center items-end gap-0.5'>
                        <span className='text-right justify-center text-black text-lg font-[700]'>لحم بقري مشوي</span>
                        <span className='text-right justify-center text-black text-lg font-light'>مع البطاطس والفلفل</span>
                    </div>
                </div>

                <div>
                    <img src= {product.thumbnail} alt="" className='rounded-[30px]'/>
                </div>
                <button className='flex justify-between items-center bg-primary rounded-full pr-[16px] pl-2 py-2 text-white'>
                    <Btn_Card_i className='bg-white rounded-full p-1 size-[28px]'/>
                    <p className='text-[16px]/[30px]'>عرض الوصفة</p>
                </button>
            </div>
        </div>
    </>
  )
}

export default Home_Card