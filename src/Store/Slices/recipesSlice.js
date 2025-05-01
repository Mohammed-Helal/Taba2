// Store/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCats,
  getSingleProduct,
  getAllRecipes
} from "@/API/recipesApi";

// Async thunk to fetch all products
export const fetchAllRecipes = createAsyncThunk(
  "Recipes/fetchAllRecipes",
  async () => {
    const recipes = await getAllRecipes();
    return recipes;
  }
);

// Async thunk to fetch all categories
export const fetchAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  async () => {
    const categories = await getAllCats();
    return categories;
  }
);

// Async thunk to fetch a single product
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const product = await getSingleProduct(id);
    return product;
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
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.SelectedRecipes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { setSelectedRecipes, setSelectedItems, setSelectedCat } =
  recipesSlice.actions;
export default recipesSlice.reducer;
