import React from 'react';
import LSline from '@/assets/Line_LS.svg?react'
import XLSline from '@/assets/Line_XLS.svg?react'
import Box from '@/assets/box.svg?react'
import Bag from '@/assets/shopping-bag.svg?react'
import { FaPlus, FaMinus } from 'react-icons/fa';

function Recipe_Order({ orderItems, onQtyChange, deliveryFee = 30 }) {
  if (orderItems.length === 0) return null;

  const ingredientsItems = orderItems.filter(i => i.type === 'ingredients');
  const fullRecipeItems = orderItems.filter(i => i.type === 'full');

  const subTotal = orderItems.reduce((sum, i) => sum + i.qty * i.price, 0);
  const total = subTotal + deliveryFee;

  const canRemoveAny = orderItems.length > 1;
  // If only one item, we disallow reducing it below 1.
  const renderItem = (item) => {
    const isOnlyItem = orderItems.length === 1;
    const disableMinus = isOnlyItem && item.qty === 1;

    return (
      <div
        key={`${item.type}-${item.id}`}
        className="border-2 border-dashed border-gray-300 rounded-xl p-3 flex flex-row-reverse items-center justify-between mb-6 h-40"
      >
        <div className="flex items-center gap-3 w-full justify-end">
          <div className="flex flex-col w-full items-end">
            <p className="font-light text-sm">{item.title}</p>
            {/* price & amount */}
              <div className='flex flex-row-reverse justify-between w-full mt-5'>
                <p className="text-red-600 font-bold text-sm mt-1">
                {item.qty * item.price} ج.م
                </p>
                  <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const newQty = item.qty - 1;
                // Prevent removal of the last remaining item if it's only one
                if (disableMinus) return;
                onQtyChange(item.id, item.type, newQty);
              }}
              className={`w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs
                ${disableMinus ? 'opacity-60 cursor-not-allowed' : ''}
              `}
              disabled={disableMinus}
            >
              <FaMinus size={10} />
            </button>
            <span className="w-5 text-center text-sm">{item.qty}</span>
            <button
              onClick={() => onQtyChange(item.id, item.type, item.qty + 1)}
              className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs"
            >
              <FaPlus size={10} />
            </button>
          </div>
            </div>
          </div>
          <div className='min-w-[100px] h-[100px] overflow-hidden object-cover rounded-full'>
            <img
              src={item.img}
              alt={item.title}
              className="min-w-[100px] h-[100px] scale-[110%] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-auto min-w-[400PX] bg-[url(@/assets/images/Order_BG.png)] text-right my-4 p-6 rounded-[40px]">
      <p className="text-xl font-bold mb-4">الطلب</p>

      {/* طلب المقادير */}
      {ingredientsItems.length > 0 && (
        <>
          <p className="font-medium text-sm mb-2">طلب المقادير</p>
          {ingredientsItems.map(renderItem)}
        </>
      )}

      {/* طلب الوصفة كاملة */}
      {fullRecipeItems.length > 0 && (
        <>
          <p className="font-semibold text-sm mt-4 mb-2">طلب الوصفة كاملة</p>
          {fullRecipeItems.map(renderItem)}
        </>
      )}

      {/* الملخص */}
      <div className=" flex flex-col items-center py-8 text-sm">
        <div className="flex flex-col  justify-between px-2 w-full items-center">
          <XLSline className='mb-4'></XLSline>
          <div className='flex justify-between flex-row-reverse mb-2 w-full'>
              <span>المجموع</span>
              <span className="font-normal">{subTotal} ج.م</span>
          </div>    
          <div className="flex flex-row-reverse justify-between mb-2 w-full">
          <span>التوصيل</span>
          <span className="font-normal">{deliveryFee} ج.م</span>
        </div>    
        </div>
        <div className="flex flex-row-reverse  justify-between font-bold text-base">

          <div className='flex flex-col justify-center my-5'>
            <LSline></LSline>
              <div className='flex justify-between flex-row-reverse mt-4'>
                <span>الإجمالي</span>
                <span>{total} ج.م</span>
              </div>
          </div>
        </div>
      </div>

      {/* buttons */}
      <button className="flex flex-row gap-4 items-center justify-center h-16 w-full py-3 bg-[url(@/assets/images/Order_button_BG2.png)] text-white rounded-full text-sm font-bold mb-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <Box></Box>
        <span>اطلب الآن</span>
      </button>
      <button className="flex flex-row gap-4 items-center justify-center h-16 w-full py-3 bg-[url(@/assets/images/Order_button_BG.png)] text-white rounded-full text-sm font-bold">
      <Bag></Bag>
        <span>أضف إلى العربة</span>
      </button>
    </div>
  );
}

export default Recipe_Order;
