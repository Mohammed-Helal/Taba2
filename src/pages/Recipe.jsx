import React from 'react';
import Recipe_Data from '../components/Recipe/Recipe_Data';
import Recipe_Order from '../components/Recipe/Recipe_Order';

function Recipe() {
  return (
    <>
      {/* Full-page gray backdrop */}
      <div className="fixed inset-0 bg-[#E6E6E6] -z-10" />
      <div className="relative flex lg:flex-row flex-col-reverse justify-center items-center gap-4 py-2 lg:mx-[60px] mx-5">
        <Recipe_Order />
        <Recipe_Data />
      </div>
    </>
  );
}

export default Recipe;