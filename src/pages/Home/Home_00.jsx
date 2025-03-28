import React from 'react'
import Top_Nav from '@/components/Top_Nav';
import Logo from '/logo.svg'
import Mask from '/Mask.svg'
import Layer from '/Layer_1.png'
import Btn from '../../components/Btn';


const Home_Draft = () => {
  return (
    <div className='flex'>
        <div className='hidden md:flex bg-gradient-to-b from-secondary to-primary relative'>
            <img src={Mask} alt="" className='h-full object-cover w-[70%]' />
            <img src={Layer} alt="" className='absolute object-cover h-full left-[200px] top-0 w-full hidden xl:block'/>
        </div>

        <div className='bg-gradient-to-b from-secondary to-primary flex-col justify-items-center h-screen pr-[70px] pt-[80px] space-y-24'>
            <div className='md:w-[600px] pr-14'>
                <Top_Nav/>
            </div>
            <div  className='leading-[50px] text-white text-[12px] pr-6'>
                <img src={Logo} alt="" className='lg:h-[200px]'/>
                <div className='max-w-[370px] text-right pr-[30px]'>
                    <p>!اكتشف أشهى الوصفات واحصل على مكوناتها بسهولة</p>
                    <p>اكثر من 10,000 وصفه، ڤيديوات تفصيليه للوصفات، توصيل المكونات او الوصفات جاهزه</p>
                </div>
                <div> <Btn /> </div>
            </div>
        </div>
    </div>
  )
}

export default Home_Draft