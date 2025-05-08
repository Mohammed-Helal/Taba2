import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { AddOrder, getAllOrders, DeleteOrder } from "../../API/orderApi";

export const AddNewOrder = createAsyncThunk('Fav/AddToFav', async ({token, id, q}) =>{
  const response = await AddOrder({token, id, q});
  return response
})

export const DeleteOneOrder = createAsyncThunk('Fav/isFav', async ({token, id, q}) =>{
  const response = await DeleteOrder({token, id, q});
  return response
})


export const FetchAllOrder = createAsyncThunk('Fav/DelFev', async (token) =>{
  const response = await getAllOrders(token);
  return response
})


const OrderSlice = createSlice({
  name:"Order",
  initialState:{
    AllOrder: [],
    AddedOrder:[],
    loading: false,
    error: null,
  },reducers:{

  },
  extraReducers: (builder) => {
  builder
    .addCase(AddNewOrder.pending, (state) =>{
      state.loading = true
    })
    .addCase(AddNewOrder.fulfilled, (state, action)=> {
      state.AddedOrder = action.payload
      state.loading = false
    })
    .addCase(AddNewOrder.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
    // FetchAllOrder
    .addCase(FetchAllOrder.pending, (state) =>{
      state.loading = true
    })
    .addCase(FetchAllOrder.fulfilled, (state, action)=> {
      state.AllOrder = action.payload
      state.loading = false
    })
    .addCase(FetchAllOrder.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
    // DelFav
    .addCase(DeleteOneOrder.pending, (state) =>{
      state.loading = true
    })
    .addCase(DeleteOneOrder.fulfilled, (state)=> {
      state.loading = false
    })
    .addCase(DeleteOneOrder.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
  }
})


export default OrderSlice.reducer