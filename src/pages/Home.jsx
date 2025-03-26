import React from 'react'
import Top_Nav from '@/components/Navbar/Top_Nav';
import Logo from '/logo.svg'
import Mask from '/Mask.svg'
import Layer from '/Layer_1.png'
import '@/pages/Home.css'

const Home = () => {
  return (
      <>
        <div className='flex'>
            <div className='hidden md:flex bg-gradient-to-b from-secondary to-primary'>
                <img src={Mask} alt="" className='h-full w-full object-cover' />
                <img src={Layer} alt="" className='absolute left-[-20px] top-0 h-full '/>
            </div>

            <div className='bg-gradient-to-b from-secondary to-primary flex justify-item-end h-screen pr-[100px] pl-55'>
                <div className='flex-col justify-items-end p-6'>
                    <div className='md:w-[770px]'>
                        <Top_Nav/>
                    </div>
                    <div  className='leading-8 text-white mt-[120px]'>
                        <img src={Logo} alt="" className='lg:h-[200px]'/>
                        <div className='max-w-[386px] text-right pt-4'>
                            <p>!اكتشف أشهى الوصفات واحصل على مكوناتها بسهولة</p>
                            <p>اكثر من 10,000 وصفه، ڤيديوات تفصيليه للوصفات، توصيل المكونات او الوصفات جاهزه</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>        
  )
}

export default Home