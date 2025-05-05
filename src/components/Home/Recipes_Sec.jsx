import React from 'react'
import Home_Card from '@/components/Recipe/Home_Card'
import { useSelector } from "react-redux";

function Recipes_Sec() {
  const { items: recipes } = useSelector((state) => state.recipes);

  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px] lg:px-[100px] px-3 mt-16'>
          {recipes.slice(0, 4).map((recipe) => (
            <Home_Card key={recipe.id} recipe= {recipe} />
          ))}
        </div>
    </>
  )
}

export default Recipes_Sec