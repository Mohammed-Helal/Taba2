import React from 'react'
import MT_Cart from '../components/Cart/MT_Cart';
import Cart_Order from '../components/Cart/Cart_Order';
import Cart_Data from '../components/Cart/Cart_Data';
// import Cart_Order from '../components/Cart/Cart_Order';


function Cart() {
  return (
    <div>
       <div className="fixed inset-0 bg-[#E6E6E6] -z-10" />
      <div 
      style={{ zoom: '0.8', transformOrigin: 'top right' }} 
      className="relative flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-4 py-0 mx-[60px] lg:max-w-full"
      >
        <Cart_Order/>
        <Cart_Data/>
        {/* <MT_Cart /> */}
      </div>
    </div>
    
  )
}

export default Cart