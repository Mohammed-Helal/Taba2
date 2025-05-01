import React, { useState, useRef, useEffect } from 'react';
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { LuSettings2, LuChevronDown, LuX } from 'react-icons/lu';

export default function Filter_Sec() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState('جميع الوصفات');
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const cuisines = ['وصفات شرقية', 'وصفات غربية'];
  const meals = ['تحلية', 'عشاء', 'غداء', 'افطار', 'جميع الوصفات'];

  return (
    <div className="px-[10px] lg:px-[100px] mt-[32px]" ref={wrapperRef}>
      {/* Header */}
      <div className="flex text-[20px]/[62px] font-semibold gap-2 justify-center items-center">
        <span>!! اليوم</span>
        <Logo className="w-[40px] h-[40px]" />
        <span>اختار</span>
      </div>

      {/* Full screen layout */}
      <div className="text-[10px] text-black font-bold hidden lg:flex flex-wrap gap-2 justify-center items-center mt-[32px]">
        {/* Clear selection button for cuisine */}
        {selectedCuisine && (
          <button
            onClick={() => setSelectedCuisine(null)}
            className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-full hover:bg-red-200 transition"
          >
            <LuX className="w-4 h-4 text-black" />
          </button>
        )}
        {/* Cuisine filters */}
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine)}
            className={
              `flex items-center whitespace-nowrap gap-2 px-[20px] py-[10px] rounded-full border-[1px] outline outline-1 outline-offset-[-1px] outline-zinc-400 transition ` +
              (selectedCuisine === cuisine
                ? 'bg-black text-white border-black'
                : ' text-black border-transparent hover:bg-black hover:text-white')
            }
          >
            {cuisine}
          </button>
        ))}

        <div className="h-10 w-[1px] bg-[#B0B0B0]" />

        {/* Meal type filters */}
        {meals.map((meal) => (
          <button
            key={meal}
            onClick={() => setSelectedMeal(meal)}
            className={
              `flex items-center gap-2 px-[40px] py-[10px] rounded-full border-[1px] outline outline-1 outline-offset-[-1px] outline-zinc-400 transition ` +
              (selectedMeal === meal
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-black border-transparent hover:bg-black hover:text-white')
            }
          >
            {meal}
          </button>
        ))}
      </div>

      {/* Small screen layout */}
      <div className="flex lg:hidden flex-row gap-4 justify-center items-center mt-[32px]">
        {/* Cuisine Filter */}
        <div className="relative w-full max-w-xs">
          <button
            onClick={() => setOpenDropdown(openDropdown === 'cuisine' ? null : 'cuisine')}
            className="w-full flex items-center justify-between gap-2 px-4 py-2 rounded-full border bg-[#E6E6E6] hover:bg-black hover:text-white transition"
          >
            <LuChevronDown className="w-4 h-4" />
            <span className="flex items-center gap-2">
              <LuSettings2 className="w-4 h-4" />
              {selectedCuisine || 'نوع المطبخ'}
              {selectedCuisine && (
                <LuX
                  onClick={(e) => { e.stopPropagation(); setSelectedCuisine(null); }}
                  className="w-4 h-4 cursor-pointer"
                />
              )}
            </span>
          </button>
          {openDropdown === 'cuisine' && (
            <div className="absolute mt-1 w-full bg-white border rounded shadow z-10">
              {cuisines.map((c) => (
                <div
                  key={c}
                  onClick={() => { setSelectedCuisine(c); setOpenDropdown(null); }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Meal Type Filter */}
        <div className="relative w-full max-w-xs">
          <button
            onClick={() => setOpenDropdown(openDropdown === 'meal' ? null : 'meal')}
            className="w-full flex items-center justify-between gap-2 px-4 py-2 rounded-full border bg-[#E6E6E6] hover:bg-black hover:text-white transition"
          >
            <LuChevronDown className="w-4 h-4" />
            <span>{selectedMeal}</span>
          </button>
          {openDropdown === 'meal' && (
            <div className=" absolute mt-1 w-full bg-white border rounded shadow z-10">
              {meals.map((m) => (
                <div
                  key={m}
                  onClick={() => { setSelectedMeal(m); setOpenDropdown(null); }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
