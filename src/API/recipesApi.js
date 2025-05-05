import { api } from "./api";

export const getAllRecipes = async () => {
  try {
    const response = await api('recipes')
    return response.data;

  } catch (error) {
    console.error("Fetch error:", error.message);
    throw new Error(error.message);
  }
};


// Get a single product by its ID
export const getSingleRecipe = async (id) => {
  try{
    const response = await api (`recipes/${id}`)

    return response
  }catch(e){
    console.log(e.message)
  }
}
