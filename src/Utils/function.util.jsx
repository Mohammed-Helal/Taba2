// functions.util.js

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Utility function to render star ratings
export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-[#FFC300] text-[20px]" />);
  }

  // Add half star if applicable
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-[#FFC300] text-[20px]" />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-[#FFC300] text-[20px]" />);
  }

  return stars;
};
