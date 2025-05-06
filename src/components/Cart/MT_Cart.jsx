import React from 'react'
import Dashed_Line from '/Taba2/src/assets/MTCLine.svg?react'
import Recipe_Extra from '../Recipe/Recipe_Extra.jsx';



function MT_Cart() {
  return (
    <div className="text-right bg-white rounded-[40px] my-4 p-8 flex flex-col gap-8 w-full items-end">

        <span className="font-bold text-3xl">العربه</span>
        <div className='self-stretch inline-flex flex-col justify-between items-center gap-12'>

            {/* MTcart & Start Shopping */}
            <div className='flex flex-row justify-between items-center  w-fit'>
                <img src="src/assets/images/Empty_Cart.png" alt="Empty Cart" className=' object-cover hidden md:inline w-[530px]' />
                <div className='inline-flex flex-col justify-center items-center gap-10'>
                    <span className='justify-center text-black text-3xl text-center font-medium' >يبدو ان عربة التسوق خاصتك فارغه</span>
                    <button className="h-16 px-16 bg-primary rounded-[40px] inline-flex justify-center items-center gap-2.5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"><span className='text-right justify-center text-white text-xl font-semibold '>تسوق الآن</span></button>
                </div>
            </div>

            <Dashed_Line className="hidden md:inline"></Dashed_Line>

            {/* suggestions */}
            <div className='flex flex-col gap-6 md:w-fit w-full pb-2'>
              <span className='text-right justify-center text-black text-2xl font-semibold'>الاكثر مبيعا</span>
             <div className="md:w-fit lg:flex w-full grid gap-8 md:grid-cols-2 grid-cols-1 justify-center">
                <Recipe_Extra />
                <Recipe_Extra />
                <Recipe_Extra />
                <Recipe_Extra />
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default MT_Cart;