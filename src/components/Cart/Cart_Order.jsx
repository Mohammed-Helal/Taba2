import React from 'react';
import Box from '@/assets/box.svg?react'
function Cart_Order() {

  
  return (
    <div
    className="w-auto min-w-[400PX] bg-[url(@/assets/images/Order_BG.png)] text-right my-4 p-6 rounded-[40px] gap-8 ">

      <p className="text-xl font-bold mb-4">الطلب</p>

      <img src="src\assets\images\Frame1.png" alt="" />

       <button className="flex flex-row gap-4 items-center justify-center h-16 w-full py-3 bg-[url(@/assets/images/Order_button_BG2.png)] text-white rounded-full text-sm font-bold mb-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <Box></Box>
            <span>اطلب الآن</span>
          </button>
          
      </div>
    
  )
}

export default Cart_Order;