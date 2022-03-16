import { createSlice } from '@reduxjs/toolkit';

export const Authentication = (dispatch, {userName,password}) => {
  console.log(userName,password)
  if(userName==='meep' && password==='moop') {
    dispatch(setAuthentication(true))
    return true
  }
  return false
}

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
