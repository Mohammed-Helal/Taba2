import React, {useState} from 'react'
import { renderStars } from "@/Utils/function.util";
import Share_Like from "@/components/Share_Like"
import Recipe_Extra from './Recipe_Extra';
import Test_img from '@/assets/images/Test.png'

function Recipe_Data({recipe}) {
  const data = [
    "500 جرام كبدة دجاج منظّفة",
    "1 كوب دقيق للتغليف",
    "ملح وفلفل أسود حسب الرغبة",
    "نصف ملعقة صغيرة بابريكا (فلفل أحمر حلو)",
    "زيت نباتي للقلي",
    "1 كوب صوص توت بري (جاهز أو محضّر منزليًا)",
    "توت بري طازج للتزيين (اختياري)",
  ]

  return (
    <>
      <div className='text-right bg-white rounded-[40px] my-4 p-[32px] flex flex-col justify-between gap-3 w-full lg:mr-[60px] mr-3'>
        {/* Top */}
        <div className='flex justify-between'>
          <div className='flex justify-center items-start gap-6'>
              <button className='bg-primary text-[15px] text-white px-[32px] py-1 rounded-full'>
                تقييم الوصفة
              </button>
              <Share_Like />
          </div>
          <div className='flex flex-col justify-center items-end gap-2'>
            <h2 className='text-[24px]/[31px] font-[700] max-w-[235px]'>كبدة دجاج مقلي مع صلصة التوت الببري</h2>
            {/* Rating */}
            <div className="flex items-center gap-4 text-[#FFC300] flex-row-reverse">
              {renderStars(3)}
              <span className="text-[18px]/[31px] text-black ms-3">
                {/* {`(${product?.reviews?.length})`} */}
                (3)
              </span>
            </div>
          </div>
        </div> 
        {/* Mid */}
        <div className='flex items-center justify-center gap-6'>
          <div className='space-y-4 w-full'>
            <p className='text-[20px]/[32px] font-[700]'>ترشيحات مع الوصفه</p>
            <div className='grid grid-cols-2 gap-2'>
              <Recipe_Extra />
              <Recipe_Extra />
              <div className='col-span-2'>
                <Recipe_Extra/>  
              </div>  
            </div>
          </div>
          {/* Line */}
          <div className='h-[435px] border-gray-400 border-r-2 border-dashed'></div>
          {/* data */}
          <div className='flex justify-end gap-6 w-full'>
            <div className='space-y-4'>
              <p className='text-[20px] font-[700]'>المقادير</p>
              {data.map((a) => (
                <p className='text-[16px]' dir='rtl'>{a}</p>
              ))}
            </div>
            <img src={Test_img} alt="" />
          </div>
        </div>
        {/* End */}
        <div></div>
      </div>
    </>
  )
}

export default Recipe_Data