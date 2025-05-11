import React, { useEffect } from 'react'
import MT_Cart from '../components/Cart/MT_Cart';
import Cart_Order from '../components/Cart/Cart_Order';
import Cart_Data from '../components/Cart/Cart_Data';
import { getAuthCookies } from '@/Utils/auth.util.js';
import { FetchAllOrder } from '../Store/Slices/orderSlice';
import { useDispatch } from 'react-redux';


function Cart() {
  const {token} = getAuthCookies()
  const dispatch = useDispatch()

  useEffect(() =>{
    if(token){
      dispatch(FetchAllOrder(token))
    }
  })

  return (
    <div>
      <div className="fixed inset-0 bg-[#E6E6E6] -z-10" />
      { token &&
      <div 
      style={{ zoom: '0.8', transformOrigin: 'top right' }} 
      className="relative flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-4 py-0 mx-[60px] lg:max-w-full"
      >
        <Cart_Order/>
        <Cart_Data/>
      </div>
      }
    </div>
  )
}

export default Cart