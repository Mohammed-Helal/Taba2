import React from 'react'
import Home_Card from '../Recipe/Home_Card'
import { useSelector } from "react-redux";

function Recipes_Sec() {
  const { items: products } = useSelector((state) => state.products);

  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px] px-[100px] mt-16'>
          {products.slice(90, 100).map((product) => (
            <Home_Card key={product.id} product={product} />
          ))}
        </div>
    </>
  )
}

export default Recipes_Sec