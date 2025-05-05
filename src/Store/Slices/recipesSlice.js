import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSingleRecipe,
  getAllRecipes
} from "@/API/recipesApi";

// Async thunk to fetch all recipes
export const fetchAllRecipes = createAsyncThunk(
  "Recipes/fetchAllRecipes",
  async () => {
    const recipes = await getAllRecipes();
    return recipes;
  }
);


// Async thunk to fetch a single recipe
export const fetchSingleRecipe = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const recipe = await getSingleRecipe(id);
    return recipe;
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
    categories: [],
    SelectedRecipes: [],
    selectedItems: [],
    selectedCat: "All Products",
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedRecipes: (state, action) => {
      state.SelectedRecipes = action.payload;
    },
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
    setSelectedCat: (state, action) => {
      state.selectedCat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.selectedItems = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(fetchSingleRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        state.SelectedRecipes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleRecipe.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { setSelectedRecipes, setSelectedItems, setSelectedCat } =
  recipesSlice.actions;
export default recipesSlice.reducer;
