import React, { useState } from 'react';
import { renderStars } from '@/Utils/function.util';
import Share_Like from '@/components/Share_Like';
import Recipe_Extra from './Recipe_Extra';
import Test_img from '@/assets/images/Test.png';

function Recipe_Data({ recipe }) {
  const [qty, setQty] = useState(1);

  const data = [
    '500 جرام كبدة دجاج منظّفة',
    '1 كوب دقيق للتغليف',
    'ملح وفلفل أسود حسب الرغبة',
    'نصف ملعقة صغيرة بابريكا (فلفل أحمر حلو)',
    'زيت نباتي للقلي',
    '1 كوب صوص توت بري (جاهز أو محضّر منزليًا)',
    'توت بري طازج للتزيين (اختياري)',
  ];

  const preparationSteps = [
    'نظفي الكبدة جيدًا وأزيلي أي عروق أو دهون زائدة.',
    'في طبق، اخلطي الدقيق مع الملح والفلفل والبابريكا.',
    'اغمسي الكبدة في خليط الدقيق حتى تتغلف جيدًا.',
    'سخني الزيت في مقلاة عميقة على حرارة متوسطة.',
    'اقلي الكبدة حتى تصبح ذهبية ومقرمشة (حوالي 3-4 دقائق لكل جانب).',
    'قدميها ساخنة مع صوص التوت البري والتزيين حسب الرغبة.',
  ];

  const inc = () => setQty((q) => q + 1);
  const dec = () => setQty((q) => Math.max(1, q - 1));

  return (
    <div className="text-right bg-white rounded-[40px] my-4 p-8 flex flex-col gap-6">
      {/* Top */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-6">
          <button className="bg-primary text-white text-[15px] px-8 py-1 rounded-full">
            تقييم الوصفة
          </button>
          <Share_Like />
        </div>
        <div className="flex flex-col items-end gap-2">
          <h2 className="text-[24px] font-[700] max-w-[235px]">
            كبدة دجاج مقلي مع صلصة التوت البري
          </h2>
          <div className="flex items-center gap-4 text-[#FFC300] flex-row-reverse">
            {renderStars(3)}
            <span className="text-[18px] text-black">(3)</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-center gap-8 flex-wrap md:flex-nowrap">
        {/* Extras (Left) */}
        <div className="w-full md:max-w-md space-y-4 order-2 md:order-1">
          <p className="text-[20px] font-[700]">ترشيحات مع الوصفة</p>
          <div className="grid grid-cols-2 gap-2">
            <Recipe_Extra />
            <Recipe_Extra />
            <div className="col-span-2">
              <Recipe_Extra />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-[435px] border-r-2 border-dashed border-gray-400 mx-4 order-2"></div>

        {/* Ingredients + Order (Right) */}
        <div className="flex flex-col min-w-fit max-w-full md:max-w-lg text-right order-1 md:order-3">
          <p className="text-[20px] font-[700] mb-2">المقادير</p>
          <div className="space-y-2 mb-6 min-w-fit max-w-full">
            {data.map((item, idx) => (
              <p key={idx} className="text-[16px]" dir="rtl">
                {item}
              </p>
            ))}
          </div>
          {/* Quantity & Buttons inline with ingredients container */}
          <div className="flex items-center gap-4 mb-4">
            <button onClick={dec} className="w-8 h-8 rounded-full border flex items-center justify-center">
              -
            </button>
            <span className="text-lg font-semibold">{qty}</span>
            <button onClick={inc} className="w-8 h-8 rounded-full border flex items-center justify-center">
              +
            </button>
          </div>
          <div className="space-y-3">
            <button className="w-full py-2 bg-black text-white rounded-full font-bold">
              اطلب المقادير — {qty * 170} ج.م
            </button>
            <button className="w-full py-2 bg-black text-white rounded-full font-bold">
              اطلب الوصفة — {qty * 220} ج.م
            </button>
          </div>
        </div>

        {/* Image Card */}
        <img
          src={Test_img}
          alt="Recipe"
          className="rounded-2xl w-[300px] object-cover h-auto order-4"
        />
      </div>

      {/* Preparation Section */}
      <div className="text-right">
        <p className="text-[20px] font-[700] mb-2">طريقة التحضير</p>
        <ol className="list-decimal list-inside space-y-2">
          {preparationSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Recipe_Data;
