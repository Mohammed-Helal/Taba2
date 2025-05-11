import React from 'react';
import Dashed_Line from '/Taba2/src/assets/MTCLine.svg?react';
import { useSelector } from 'react-redux';
import Home_Card from '@/components/Recipe/Home_Card';

function Cart_Data() {
  const orders = useSelector((state) => state.Order.AllOrder);

  const uniqueRecipes = Array.from(
    new Map(
      orders
        .filter(order => (order.recipe_quantity > 0 || order.ingredients_quantity > 0))
        .map(order => [order.recipe.id, order.recipe])
    ).values()
  );

  return (
    <div className="text-right bg-white rounded-[40px] my-4 py-8 px-4 flex flex-col gap-4 w-full items-center  lg:items-end">
      <span className="font-bold text-3xl">العربة</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-16">
        {uniqueRecipes.map((recipe) => (
          <Home_Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Cart_Data;
