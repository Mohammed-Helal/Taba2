import { createSlice , createAsyncThunk, current } from "@reduxjs/toolkit";
import { AddOrder, getAllOrders, DeleteOrder, getOneOrder, UpdateOrder } from "../../API/orderApi";
import { login } from "./authSlice";

export const AddNewOrder = createAsyncThunk('order/AddOrder', async ({token, id, Rq, Iq}) =>{
  const response = await AddOrder({token, id, Rq, Iq});
  return response
})

export const DeleteOneOrder = createAsyncThunk('order/DelOrder', async ({token, id, Rq, Iq}) =>{
  const response = await DeleteOrder({token, id, Rq, Iq});
  return response
})


export const FetchAllOrder = createAsyncThunk('oreder/getAllOrder', async (token) =>{
  const response = await getAllOrders(token);
  return response
})

export const FetchOneOrder = createAsyncThunk('order/getOneOrder', async({token, id}) =>{
  const response = await getOneOrder({token, id})
  return response
})

export const UpdateOrderD = createAsyncThunk('order/UpdateOrder', async({token, id, u}) =>{
  const response = await UpdateOrder({token, id, u})
  return response
})



const OrderSlice = createSlice({
  name:"Order",
  initialState:{
    AllOrder: [],
    AddedOrder:[],
    currentOrder:[],
    loading: false,
    error: null,
  },reducers:{
    ResetCurrentOrder: (state) => {
      state.currentOrder = [];
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(AddNewOrder.pending, (state) =>{
      state.loading = true
    })
    .addCase(AddNewOrder.fulfilled, (state, action)=> {
      state.currentOrder = action.payload
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
    // DelOrder
    .addCase(DeleteOneOrder.pending, (state) =>{
      state.loading = true
    })
    .addCase(DeleteOneOrder.fulfilled, (state, action)=> {
      state.currentOrder = [];
      state.loading = false
    })
    .addCase(DeleteOneOrder.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
    // AddOneOrder
    .addCase(FetchOneOrder.pending, (state) =>{
      state.loading = true
    })
    .addCase(FetchOneOrder.fulfilled, (state, action)=> {
      state.currentOrder = action.payload
      state.loading = false
    })
    .addCase(FetchOneOrder.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
    // UpdateOrder
    .addCase(UpdateOrderD.pending, (state) =>{
      state.loading = true
    })
    .addCase(UpdateOrderD.fulfilled, (state, action)=> {
      state.currentOrder = action.payload
      state.loading = false
    })
    .addCase(UpdateOrderD.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
  }
})

export const {ResetCurrentOrder} = OrderSlice.actions
export default OrderSlice.reducer