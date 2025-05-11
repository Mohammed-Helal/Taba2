import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import LSline from '@/assets/Line_LS.svg?react';
import XLSline from '@/assets/Line_XLS.svg?react';
import Box from '@/assets/box.svg?react';
import Bag from '@/assets/shopping-bag.svg?react';
import { getAuthCookies } from '@/Utils/auth.util.js';
import { UpdateOrderD, DeleteOneOrder, FetchAllOrder } from '../../Store/Slices/orderSlice';

function AllOrdersList() {
  const dispatch = useDispatch();
  const { token } = getAuthCookies();
  const AllOrder = useSelector((state) => state.Order.AllOrder);

  useEffect( () =>{
    dispatch (FetchAllOrder(token))
  }, [dispatch])

  const handleInc = (order, type) => {
    const update = {};
    update[type] = order[type] + 1;
    dispatch(UpdateOrderD({ token, id: order.id, u: update }));
    dispatch (FetchAllOrder(token))
  };

  const handleDec = (order, type) => {
    if (order.recipe_quantity > 0 && order.ingredients_quantity > 0) {
      const update = {};
      update[type] = order[type] - 1;
      dispatch(UpdateOrderD({ token, id: order.id, u: update }));
    } else if (order.ingredients_quantity === 0 && order.recipe_quantity === 1 || order.ingredients_quantity === 1 && order.recipe_quantity === 0 ){
      dispatch(DeleteOneOrder({ token, id: order.id, q: 1 }));
    }
    dispatch (FetchAllOrder(token))
  };


  return (
    <div className="w-auto min-w-[400px] bg-[url(@/assets/images/Order_BG.png)] text-right my-4 p-6 rounded-[40px]">
      <p className="text-xl font-bold mb-4">الطلبات</p>

      {AllOrder.map((order) => {
        const recipe = order.recipe;

        return (
          <div key={order.id} className="mb-8">
            {/* طلب المقادير */}
            {order.ingredients_quantity > 0 && (
              <>
                <p className="font-medium text-sm mb-2">طلب المقادير</p>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-3 flex flex-row-reverse items-center justify-between mb-6 h-40">
                  <div className="flex items-center gap-3 w-full justify-end">
                    <div className="flex flex-col w-full items-end">
                      <p className="font-light text-sm">{recipe?.name}</p>
                      <div className="flex flex-row-reverse justify-between w-full mt-5">
                        <p className="text-red-600 font-bold text-sm mt-1">
                          {parseFloat(recipe?.ingredients_cost || 0).toFixed(2)} ج.م
                        </p>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleDec(order, 'ingredients_quantity')} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs">
                            <FaMinus size={10} />
                          </button>
                          <span className="w-5 text-center text-sm">{order.ingredients_quantity}</span>
                          <button onClick={() => handleInc(order, 'ingredients_quantity')} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs">
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-[100px] h-[100px] overflow-hidden object-cover rounded-full">
                      <img
                        src={recipe?.image_url || "https://via.placeholder.com/100"}
                        alt="item"
                        className="min-w-[100px] h-[100px] scale-[110%] object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* طلب الوصفة */}
            {order.recipe_quantity > 0 && (
              <>
                <p className="font-medium text-sm mb-2">طلب الوصفة</p>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-3 flex flex-row-reverse items-center justify-between mb-6 h-40">
                  <div className="flex items-center gap-3 w-full justify-end">
                    <div className="flex flex-col w-full items-end">
                      <p className="font-light text-sm">{recipe?.name}</p>
                      <div className="flex flex-row-reverse justify-between w-full mt-5">
                        <p className="text-red-600 font-bold text-sm mt-1">
                          {parseFloat(recipe?.price || 0).toFixed(2)} ج.م
                        </p>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleDec(order, 'recipe_quantity')} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs">
                            <FaMinus size={10} />
                          </button>
                          <span className="w-5 text-center text-sm">{order.recipe_quantity}</span>
                          <button onClick={() => handleInc(order, 'recipe_quantity')} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs">
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-[100px] h-[100px] overflow-hidden object-cover rounded-full">
                      <img
                        src={recipe?.image_url || "https://via.placeholder.com/100"}
                        alt="item"
                        className="min-w-[100px] h-[100px] scale-[110%] object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}

      {/* الملخص الكلي */}
      <div className="flex flex-col items-center py-8 text-sm">
        <div className="flex flex-col justify-between px-2 w-full items-center">
          <XLSline className="mb-4" />
          <div className="flex justify-between flex-row-reverse mb-2 w-full">
            <span>المجموع</span>
            <span className="font-normal">
              {AllOrder.reduce((acc, o) => acc + parseFloat(o.total_price || 0), 0).toFixed(2)} ج.م
            </span>
          </div>
          <div className="flex flex-row-reverse justify-between mb-2 w-full">
            <span>التوصيل</span>
            <span className="font-normal">30 ج.م</span>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between font-bold text-base">
          <div className="flex flex-col justify-center my-5">
            <LSline />
            <div className="flex justify-between flex-row-reverse mt-4">
              <span>الإجمالي</span>
              <span>
                {(AllOrder.reduce((acc, o) => acc + parseFloat(o.total_price || 0), 0) + 30).toFixed(2)} ج.م
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* الأزرار */}
      <button className="flex flex-row gap-4 items-center justify-center h-16 w-full py-3 bg-[url(@/assets/images/Order_button_BG2.png)] text-white rounded-full text-sm font-bold mb-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <Box />
        <span>اطلب الآن</span>
      </button>
      {/* <button className="flex flex-row gap-4 items-center justify-center h-16 w-full py-3 bg-[url(@/assets/images/Order_button_BG.png)] text-white rounded-full text-sm font-bold">
        <Bag />
        <span>أضف إلى العربة</span>
      </button> */}
    </div>
  );
}

export default AllOrdersList;

