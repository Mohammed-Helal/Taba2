import React from 'react';
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
        className="border-2 border-dashed border-gray-300 rounded-xl p-3 flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-3">
          <img
            src={item.img}
            alt={item.title}
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
          <div className="flex flex-col items-end">
            <p className="font-semibold text-sm">{item.title}</p>
            <p className="text-[11px] text-gray-400 mt-1">
              {item.type === 'ingredients' ? '50 gm' : ''}
            </p>
            <p className="text-red-600 font-bold text-sm mt-1">
              {item.qty * item.price} ج.م
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const newQty = item.qty - 1;
              // Prevent removal of the last remaining item if it's only one
              if (disableMinus) return;
              onQtyChange(item.id, item.type, newQty);
            }}
            className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-xs
              ${disableMinus ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            disabled={disableMinus}
          >
            <FaMinus size={10} />
          </button>
          <span className="w-5 text-center text-sm">{item.qty}</span>
          <button
            onClick={() => onQtyChange(item.id, item.type, item.qty + 1)}
            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-xs"
          >
            <FaPlus size={10} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-auto min-w-[400PX] bg-white text-right my-4 p-6 rounded-[40px]">
      <p className="text-xl font-bold mb-4">الطلب</p>

      {/* طلب المقادير */}
      {ingredientsItems.length > 0 && (
        <>
          <p className="font-semibold text-sm mb-2">طلب المقادير</p>
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
      <div className="border-y border-dashed border-gray-300 py-4 my-4 text-sm">
        <div className="flex justify-between mb-2">
          <span>المجموع</span>
          <span className="font-bold">{subTotal} ج.م</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>التوصيل</span>
          <span className="font-bold">{deliveryFee} ج.م</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span>الإجمالي</span>
          <span>{total} ج.م</span>
        </div>
      </div>

      {/* الأزرار */}
      <button className="w-full py-3 bg-primary text-white rounded-full text-sm font-bold mb-2">
        اطلب الآن
      </button>
      <button className="w-full py-3 bg-black text-white rounded-full text-sm font-bold">
        أضف إلى العربة
      </button>
    </div>
  );
}

export default Recipe_Order;
