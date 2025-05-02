import React from 'react';
import Recipe_Data from '../components/Recipe/Recipe_Data';
import Recipe_Order from '../components/Recipe/Recipe_Order';

function Recipe() {
  return (
    <>
      {/* Full-page gray backdrop */}
      <div className="fixed inset-0 bg-[#E6E6E6] -z-10" />
      <div className="relative flex justify-center items-start gap-4 min-h-screen py-8 lg:mx-[60px] scale-90">
        <Recipe_Order />
        <Recipe_Data />
      </div>
    </>
  );
}

export default Recipe;