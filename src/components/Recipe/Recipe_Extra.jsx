import React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import Catshap from '@/assets/images/Catshap.png';

function Recipe_Extra() {
  return (
    <div className="border-dashed border-gray-400 border-2 rounded-[10px] p-4 flex flex-grow items-center justify-between gap-3 text-right min-w-[217px] w-full">
      <div className="flex flex-col">
        <p className="font-semibold">كاتشب حار</p>
        <span className="text-[12px] text-gray-500">50 gm</span>
        <div className="flex items-center justify-between mt-2 font-normal text-black">
          <FaCirclePlus className="text-xl " />
          <span className='text-primary'>10 ج.م</span>
        </div>
      </div>
      <img
        src={Catshap}
        alt="كاتشب حار"
        className="w-[60px] h-[60px] object-cover rounded-lg "
      />
    </div>
);
}

export default Recipe_Extra;
