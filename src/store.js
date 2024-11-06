import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import { userApi } from './features/users/userApi';

const store = configureStore({
  reducer: {
    users: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;

