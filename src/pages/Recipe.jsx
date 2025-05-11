import React, { useState, useEffect } from 'react';
import Recipe_Data from '../components/Recipe/Recipe_Data';
import Recipe_Order from '../components/Recipe/Recipe_Order';
import TestImg from '@/assets/images/Test.png';
import { useDispatch } from 'react-redux';
import { fetchSingleRecipe } from '../Store/Slices/recipesSlice';
import { useParams } from 'react-router-dom';
import { getAuthCookies } from '@/Utils/auth.util.js'
import { FetchAllOrder } from '../Store/Slices/orderSlice';
import Payment from './Payment';
import { login } from '../Store/Slices/authSlice';

const recipeInfo = {
  preparation: [
    'نظفي الكبدة جيدًا وأزيلي أي عروق أو دهون زائدة.',
    'في طبق، اخلطي الدقيق مع الملح والفلفل والبابريكا.',
    'اغمسي الكبدة في خليط الدقيق حتى تتغلف جيدًا.',
    'سخني الزيت في مقلاة عميقة على حرارة متوسطة.',
    'اقلي الكبدة حتى تصبح ذهبية ومقرمشة (حوالي 3-4 دقائق لكل جانب).',
    'قدميها ساخنة مع صوص التوت البري والتزيين حسب الرغبة.',
  ],
};

function Recipe() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {token, user_id} = getAuthCookies()
  
  useEffect(()=>{
    if(token, id){
      dispatch(fetchSingleRecipe(id))
      dispatch(FetchAllOrder(token))
    }
  }, [dispatch, token, id])
  

  return (
    <>
      {/* <Payment /> */}
      <div className="fixed inset-0 bg-[#E6E6E6] -z-10" />
      <div 
      style={{ zoom: '0.8', transformOrigin: 'top right' }} 
      className="relative flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-4 py-0 mx-[60px] lg:max-w-full"
      >
        <Recipe_Order/>
        <Recipe_Data recipe={recipeInfo}/>
      </div>
    </>
  );
}

export default Recipe;
