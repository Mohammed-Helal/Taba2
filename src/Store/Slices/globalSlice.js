import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "global",
  initialState:{

    isProfileSlider : false,
  },
  reducers:{
    Click_Profile: (state)=>{
      state.isProfileSlider = !state.isProfileSlider;
    },
  }
})

export const {Click_Profile, ToggleFav} = globalReducer.actions
export default globalReducer.reducer