import axiosInstance from "./axiosInstance";


export const getAllRecipes = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/recipes', {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || "Fetching recipes failed");
    }

    const data = await response.json();
    return data.data;

  } catch (error) {
    console.error("Fetch error:", error.message);
    throw new Error(error.message);
  }
};


// Get a single product by its ID
export const getSingleRecipe = async (id) => {
  try{
    const response = await fetch(`http://127.0.0.1:8000/api/recipes/${id}`,{
      method: 'Get',
      headers:{
        Accept: "application/json"
      }
    })
    const data = await response.json()

    return data
  }catch(e){
    console.log(e.message)
  }
}
