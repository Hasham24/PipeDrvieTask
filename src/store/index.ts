import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './slices/user';
import { persons } from '../services/persons'
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
     [persons.reducerPath]: persons.reducer,
  },
  middleware: (getDefaultMiddleware) =>
   [...getDefaultMiddleware(),persons.middleware]
});

// Infer the `RootState` and `AppDispatch` types from the store itsel
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
