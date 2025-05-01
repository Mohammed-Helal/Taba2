import axiosInstance from "./axiosInstance";

// Get all products with an optional limit
export const getAllRecipes = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/recipes', {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json(); // 👍 جديد
      throw new Error(errorData.message || "Fetching recipes failed");
    }

    const data = await response.json();
    return data.data;

  } catch (error) {
    console.error("Fetch error:", error.message);
    throw new Error(error.message);
  }
};


// Get all product categories
export const getAllCats = async () => {
  try {
    const response = await axiosInstance.get("/products/category-list");
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Get a single product by its ID
export const getSingleProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
