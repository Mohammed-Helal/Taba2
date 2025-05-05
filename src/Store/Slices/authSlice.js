// Store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, getCurrentUser, loginUser} from "@/API/authApi";

// Async thunk for logging in
export const login = createAsyncThunk(
  "/auth/login",
  async (FormData) => {
    const user = await loginUser(FormData);
    return user;
  }
);

// Async thunk for Signup in
export const register = createAsyncThunk(
  "/auth/register",
  async (FormData) => {
    const user = await registerUser(FormData);
    return user;
  }
);

// Async thunk for fetching current user
export const fetchUser = createAsyncThunk("auth/fetchUser", async ({token, id}) => {
  const response = await getCurrentUser({token, id});
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
