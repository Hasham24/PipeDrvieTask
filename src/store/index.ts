import { configureStore } from '@reduxjs/toolkit';
import { personSliceReducer } from './slices/person';
import { persons } from '../services/persons'
const createDebugger = require('redux-flipper').default;
export const store = configureStore({
  reducer: {
    person: personSliceReducer,
     [persons.reducerPath]: persons.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persons.middleware).concat(createDebugger())
});

// Infer the `RootState` and `AppDispatch` types from the store itsel
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
