import React, { useEffect, useState } from 'react';
import { renderStars } from '@/Utils/function.util';
import Share_Like from '@/components/Share_Like';
import Recipe_Extra from './Recipe_Extra';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { getAuthCookies } from '@/Utils/auth.util.js'
import { FetchAllOrder, AddNewOrder, DeleteOneOrder } from '../../Store/Slices/orderSlice';
import { useNavigate } from 'react-router-dom';

function Recipe_Data({ recipe, addToOrder }) {
  const [ingredientsQty, setIngredientsQty] = useState(1);
  const [recipeQty, setRecipeQty] = useState(1);


  const incIngr = () => setIngredientsQty(q => q + 1);
  const decIngr = () => setIngredientsQty(q => Math.max(1, q - 1));
  const incRec = () => setRecipeQty(q => q + 1);
  const decRec = () => setRecipeQty(q => Math.max(1, q - 1));


//////////////////////////////////////////////////////////////////////////////////////////
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {token, id} = getAuthCookies()
  const item = useSelector((state) => state.recipes.SelectedRecipes)
  // useEffect(()=>{
  //   if(token){
  //     dispatch(FetchAllOrder(token))
  //       .then((res)=> {
  //         const order =res.payload
  //         console.log (order)
  //       })
  //   }
  // }, [dispatch])
  

  return (
    <div className="text-right bg-white rounded-[40px] my-4 p-8 flex flex-col gap-6 w-full items-end">
      {/* العنوان والتقييم */}
      <div className="flex justify-between items-start w-full">
        <div className="flex sm:flex-row flex-col items-center gap-4">
          <button className="bg-primary text-white text-[15px] px-8 h-8  rounded-full whitespace-nowrap">
            تقييم الوصفة
          </button>
          <Share_Like recipe = {item}/>
        </div>
        <div className="flex flex-col items-end gap-2">
          <h2 className="text-[24px] font-[700] max-w-[235px]">{item.name}</h2>
          {/* <p className="text-sm text-gray-500">{recipe.subtitle}</p> */}
          <div className="flex items-center gap-4 text-[#FFC300] flex-row-reverse">
            {renderStars(3)} <span className="text-[18px] text-black">(3)</span>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col 2xl:flex-row-reverse gap-10 w-full">
        {/* القسم الأيمن: المقادير والصورة */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-8 order-1 min-w-fit justify-end">
          <div className="flex flex-col md:flex-row-reverse gap-4 lg:flex-col text-right md:gap-[90px] lg:gap-[16px] min-w-fit items-end text-sm/6 ">
            <div className="space-y-2">
              <p className="text-[20px] font-[700]">المقادير</p>
                {item.ingredients && item.ingredients.map((ing) => (
              <p key={ing.id} className="text-[16px]" dir="rtl">{ing.name} {ing.unit} {ing.price}</p>
              ))}
            </div>

            <div className='flex-col lg:flex-col flex gap-4 md:gap-[10px] lg:gap-4'>
              {/* زر المقادير */}
              <div className="flex justify-between items-center mt-2 flex-wrap gap-2 w-fit">
                <div className="flex items-center gap-2">
                  <button onClick= {() => {
                    if(token) {
                      decIngr(); 
                    }
                    navigate('/Taba2/auth/login')
                  }} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs"><FaMinus size={6} /></button>
                  <span className="text-lg font-semibold">{ingredientsQty}</span>
                  <button onClick= {() => {
                    if(token) {
                      incIngr(); 
                    }
                    navigate('/Taba2/auth/login')
                  }} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs"><FaPlus size={6} /></button>
                </div>
                <button
                  onClick={() => {
                    if(token){
                      incRec();
                    }
                    navigate('/Taba2/auth/login')
                  }}
                  className="px-6 py-2 bg-[url(@/assets/images/Order_button_BG.png)] text-white rounded-full font-normal h-12 whitespace-nowrap flex flex-row-reverse gap-4 items-center"
                >
                  <span>اطلب المقادير</span>
                  <span>|</span>
                  <span>{ingredientsQty * item.price} ج.م</span>
                </button>
              </div>

              {/* زر الوصفة */}
              <div className="flex justify-between  gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={() => {
                    if (token) {
                      decRec();
                      dispatch(DeleteOneOrder({ token, id: item.id, q: 1 }));
                    }
                    navigate('/Taba2/auth/login')
                  }} 
                  className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs">
                  <FaMinus size={6} /></button>
                  <span className="text-lg font-semibold">{recipeQty}</span>
                  <button onClick= {() => {
                    if(token) {
                      incRec(); 
                      dispatch(AddNewOrder({ token, id: item.id, q: 1 }))
                    }
                    navigate('/Taba2/auth/login')
                  }} className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-300 bg-zinc-300 text-xs"><FaPlus size={6} /></button>
                </div>
                <button
                  onClick={() => {
                    if(token){
                      incRec();
                      dispatch(AddNewOrder({token, id: item.id, q:1}))
                    }
                    else{
                      navigate('/Taba2/auth/login')
                    }
                  }}
                  className="px-6 py-2 bg-[url(@/assets/images/Order_button_BG.png)] text-white rounded-full font-normal h-12 whitespace-nowrap flex flex-row-reverse gap-4 items-center"
                >
                  <span>اطلب الوصفه</span>
                  <span>|</span>
                  <span>{recipeQty * recipe.fullPrice} ج.م</span>
                </button>
              </div>
            </div>
          </div>

          {/* صورة الوصفة */}
          <div className="w-full max-w-[350px] overflow-hidden">
            <img
              src={item.image_url}
              alt="Recipe"
              className="rounded-[40px] object-cover min-w-full max-w-[330px]"
            />
          </div>
        </div>

        {/* القسم الأيسر: الترشيحات */}
        <div className="2xl:flex-row-reverse 2xl:flex items-center gap-4 order-2 overflow-x-auto flex-grow w-full min-w-[50px]">
          <div className="flex flex-row-reverse items-center gap-12 flex-grow w-full">
            {/* الخط الفاصل */}
            <div className="hidden 2xl:block h-[300px] border-r-2 border-dashed border-gray-400"></div>

            {/* الترشيحات */}
            <div className="space-y-4 w-full">
              <p className="text-[20px] font-[700]">ترشيحات مع الوصفة</p>
              <div className="flex flex-row w-full">
                <Recipe_Extra />
                <Recipe_Extra />
                <Recipe_Extra />
                <Recipe_Extra />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* طريقة التحضير */}
      <div className="text-right w-full">
        <p className="text-[20px] font-[700] mb-2">طريقة التحضير</p>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.preparation.map((step, idx) => (
            <li key={idx} dir="rtl">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Recipe_Data;
