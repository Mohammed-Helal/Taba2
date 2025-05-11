import React, { useEffect, useState } from 'react';
import Banner from '../components/Home/Banner';
import Filter_Sec from '../components/Home/Filter_Sec';
import Recipes_Sec from '../components/Home/Recipes_Sec';

import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchAllRecipes } from "@/Store/Slices/recipesSlice";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.recipes);


  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState('جميع الوصفات');

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
      navigate(location.pathname, { replace: true }); 
    }
  }, [location]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <ClipLoader color="#36d7b7" loading={isLoading} size={50} />
      </div>
    );
  }

  return (
    <>
      <div className='bg-[#E6E6E6] md:bg-white p-4'>
        <Banner />
        <Filter_Sec
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
        />
        <Recipes_Sec
          selectedCuisine={selectedCuisine}
          selectedMeal={selectedMeal}
        />
      </div>
    </>
  );
}

export default Home;
