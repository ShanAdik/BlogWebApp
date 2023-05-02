import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state){
      state.isLoggedIn = true
    },
    logout(state){
      localStorage.removeItem("userId");
      state.isLoggedIn = false
    },
  }
});

export const authActions = authSlice.actions

export const store = configureStore({
  reducer: authSlice.reducer
})
  //when single reducer is present you can do as following
  //reduccer: authSlice.reducer
  //when multiple reducer are present you can create objects and then you can define reducers with key value pairs
