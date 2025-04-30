import React from 'react'
import Banner from '../components/Home/Banner'
import Filter_Sec from '../components/Home/Filter_Sec'
import Recipes_Sec from '../components/Home/recipes_Sec'

import { useSelector, useDispatch } from "react-redux";
// import ClipLoader from "react-spinners/ClipLoader";
import { fetchAllProducts } from "@/Store/Slices/productsSlice";
import { useEffect } from "react";


function Home() {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        Loding...
      </div>
    );
  }


  return (
    <>
      <Banner />
      <Filter_Sec />
      <Recipes_Sec />
    </>
  )
}

export default Home