import React from 'react'
import Banner from '../components/Home/Banner'
import Filter_Sec from '../components/Home/Filter_Sec'
import Recipes_Sec from '../components/Home/Recipes_Sec'

import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchAllRecipes } from "@/Store/Slices/recipesSlice";
import { useEffect } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { MdCheckCircle } from "react-icons/md";


function Home() {
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()

  const { isLoading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
      navigate(location.pathname, { message: true });
    }
  }, [location]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
          <ClipLoader
          color="#36d7b7"
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }


  return (
    <>
      <div className='bg-[#E6E6E6] md:bg-white p-4'>
        <Banner />
        <Filter_Sec />
        <Recipes_Sec />
      </div>
    </>
  )
}

export default Home