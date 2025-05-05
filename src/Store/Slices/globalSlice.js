import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "global",
  initialState:{
    Fav:[],
    isProfileSlider : false,
  },
  reducers:{
    Click_Profile: (state)=>{
      state.isProfileSlider = !state.isProfileSlider;
    },
    ToggleFav: (state, action) => {
      const recipe = action.payload
      // console.log(recipe)
      const exist = state.Fav.find(item => item.id === recipe.id)
      if(exist){
        state.Fav = state.Fav.filter(item => item.id !== recipe.id)
      }else{
        state.Fav.push(recipe)
      }
      // console.log(state.Fav)
    }
  }
})

export const {Click_Profile, ToggleFav} = globalReducer.actions
export default globalReducer.reducer