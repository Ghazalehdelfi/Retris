import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuth = action.payload;
    }
  }
});

export const { setAuthentication } = loginSlice.actions;

export default loginSlice.reducer;
