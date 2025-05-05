import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { AddFev, isFav, DelFev } from "../../API/fevApi";

export const AddToFav = createAsyncThunk('Fav/AddToFav', async ({token, id}) =>{
  const response = await AddFev({token, id});
  return response
})

export const is_Fav = createAsyncThunk('Fav/isFav', async ({token, id}) =>{
  const response = await isFav({token, id});
  return response
})


export const DeleteFev = createAsyncThunk('Fav/DelFev', async ({token, id}) =>{
  const response = await DelFev({token, id});
  return response
})



const FavSlice = createSlice({
  name:"Fav",
  initialState:{
    AllFav: [],
    AddedFav:[],
    isFav: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
  builder
    .addCase(AddToFav.pending, (state) =>{
      state.loading = true
    })
    .addCase(AddToFav.fulfilled, (state, action)=> {
      state.AddedFav = action.payload
      state.loading = false
    })
    .addCase(AddToFav.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
    // isFav
    .addCase(is_Fav.pending, (state) =>{
      state.loading = true
    })
    .addCase(is_Fav.fulfilled, (state, action)=> {
      state.isFav = true
      state.loading = false
    })
    .addCase(is_Fav.rejected, (state, action)=> {
      state.isFav = action.payload
      state.loading = false
    })
    // DelFev
    .addCase(DeleteFev.pending, (state) =>{
      state.loading = true
    })
    .addCase(DeleteFev.fulfilled, (state, action)=> {
      state.isFav = false
      state.loading = false
    })
    .addCase(DeleteFev.rejected, (state, action)=> {
      state.isFav = null
      state.loading = false
    })
  }
})

export default FavSlice.reducer