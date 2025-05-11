import React, { useState } from 'react';
import Home_Card from '@/components/Recipe/Home_Card';
import { useSelector } from 'react-redux';

function Recipes_Sec({ selectedCuisine, selectedMeal }) {
  const { items: recipes } = useSelector((state) => state.recipes);
  const [visibleCount, setVisibleCount] = useState(12);

  
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCuisine = selectedCuisine ? recipe.cuisine_type.name === selectedCuisine : true;
    const matchesMeal =
    selectedMeal === 'جميع الوصفات'
    ? true
    : recipe.categories.some((cat) => cat.name === selectedMeal);
    return matchesCuisine && matchesMeal;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px] lg:px-[100px] px-3 mt-16">
        {filteredRecipes.slice(0, visibleCount).map((recipe) => (
          <Home_Card key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {visibleCount < filteredRecipes.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-primary hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg"
          >
            عرض المزيد
          </button>
        </div>
      )}
    </>
  );
}

export default Recipes_Sec;
