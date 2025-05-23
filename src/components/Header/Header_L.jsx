import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '/Taba2/src/assets/Logo.svg?react';
import { IoIosSearch } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");  // هنا نضيف حالة البحث

  const user = useSelector((state) => state.auth.user);
  const isProfilePage = location.pathname === "/Taba2/Profile/acount";
  const recipes = useSelector((state) => state.recipes.items);  // هنا نأخذ الوصفات من الريدوكس

  // تصفية الوصفات بناءً على النص المدخل في خانة البحث
  const filteredRecipes = recipes.filter((recipe) => {
    const title = recipe.title || ""; // تأكد من أن العنوان غير فارغ
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const linkRefs = {
    contact: useRef(null),
    blog: useRef(null),
    recipe: useRef(null),
    favorites: useRef(null),
    recipes: useRef(null),
  };

  const CartBtn = () =>{
    if(!user){
      navigate('/Taba2/auth/login')
    }else{
      navigate('/Taba2/cart')
    }
  }

  useEffect(() => {
    // Reset all to gray
    Object.values(linkRefs).forEach(ref => {
      if (ref.current) ref.current.classList.remove('text-black');
    });
    // Highlight current
    if (location.pathname === '/Taba2' && linkRefs.recipes.current) {
      linkRefs.recipes.current.classList.add('text-black');
    }
    if (location.pathname === '/Taba2/Profile/fav' && linkRefs.favorites.current) {
      linkRefs.favorites.current.classList.add('text-black');
    }
  }, [location.pathname]);

  return (
    <nav className="mx-[60px] mt-[16px] whitespace-nowrap hidden md:grid grid-cols-2 lg:flex lg:justify-center px-[16px] py-[16px] items-center rounded-[50px] bg-gray-500 md:bg-white">
      {
        !user ?
          <div className="flex space-x-[16px] items-center order-1 lg:col-span-3 font-[600]">
            <button
              className="rounded-full bg-primary text-white px-[24px] h-12 py-[8px] text-[12px] hover:bg-[#F6B0B8]"
              onClick={() => navigate('auth/login')}
            >
              تسجيل دخول
            </button>
            <button
              className="text-black text-[12px]/[14px] hover:bg-[#F6B0B8] px-[24px] h-12 py-[8px] rounded-full"
              onClick={() => navigate('auth/signup')}
            >
              انشاء حساب
            </button>
          </div>
          :
          <div className="flex space-x-[16px] items-center order-1 lg:col-span-3 font-[600] text-white text-[12px]">
            <button className='flex justify-center bg-primary rounded-full p-4 space-x-2 items-center hover:bg-[#F6B0B8]' onClick={CartBtn}>
              <SlHandbag />
              <p>العربة</p>
            </button>
            {!isProfilePage &&
              <button className='bg-primary rounded-full p-5 hover:bg-[#F6B0B8]' onClick={() => navigate('/Taba2/Profile/acount')}>
                <FaRegUser />
              </button>
            }
          </div>
      }

      {/* Navigation Links */}
      <div className="flex justify-between items-center order-3 lg:order-2 w-full col-span-2 lg:col-span-3 mt-[16px] lg:mt-0 text-[13px] text-[#B0B0B0] font-[700] rounded-[50px">
        <ul className="flex justify-center items-center gap-[30px] w-full pt-1">
          <li>
            <Link ref={linkRefs.contact} to="#" className="focus:outline-none hover:text-black">
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link ref={linkRefs.blog} to="#" className="focus:outline-none hover:text-black">
              المدونة
            </Link>
          </li>
          <li>
            <Link ref={linkRefs.recipe} to="#" className="focus:outline-none hover:text-black">
              فصل وصفتك
            </Link>
          </li>
          <li>
            <Link ref={linkRefs.favorites} to={user ? "/Taba2/Profile/fav" : "/Taba2/auth/login"} className="focus:outline-none hover:text-black">
              المفضلة
            </Link>
          </li>
          <li>
            <Link ref={linkRefs.recipes} to="/Taba2" className="focus:outline-none hover:text-black">
              الوصفات
            </Link>
          </li>
        </ul>
      </div>

      {/* Search & Logo */}
      <div className="flex justify-center items-center order-2 lg:order-3 lg:col-span-2">
        <div className="relative w-full lg:w-40 flex flex-row-reverse">
          <IoIosSearch
            className="hidden sm:inline absolute left-2 top-1/2 -translate-y-1/2 text-[#B0B0B0] rounded-full p-2 cursor-pointer z-10"
            size={40}
          />
          <input
            type="text"
            className="hidden sm:block w-full pl-12 pr-4 h-10 bg-[#F3F3F6] rounded-full border border-gray-300 text-sm placeholder:text-black placeholder:text-[12px] focus:outline-none text-right"
            placeholder="نفسك في ايه؟"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // تحديث النص المدخل
          />
          {/* Mobile-only button */}
          <button
            className="sm:hidden inset-0 flex justify-center items-center"
            aria-label="Search"
          >
            <div className="bg-primary p-2 rounded-full">
              <IoIosSearch className="text-white" size={20} />
            </div>
          </button>
        </div>
        <Link to="/Taba2">
          <Logo className="h-16 w-16 sm:ml-4 ml-8" />
        </Link>
      </div>

      {/* Display filtered recipes if searchQuery is not empty */}
      {searchQuery && (
        <div className="search-results">
          <h2>نتائج البحث:</h2>
          <ul>
            {filteredRecipes.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/Taba2/recipe/${recipe.id}`}>{recipe.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
