import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';


export const userSlice = createSlice({
  name: 'counter',
  initialState:{
    user:null,
  },
  reducers: {
    login: (state,action) => {
      state.value = action.payload;
    },
    logout: (state,action) => {
      state.value = null;
    },
    
  },
});
export const { login,logout } = userSlice.actions;

//Selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
