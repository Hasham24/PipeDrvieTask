import { configureStore } from '@reduxjs/toolkit';
import { personSliceReducer } from './slices/person';
import { persons } from '../services/persons';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const createDebugger = require('redux-flipper').default;
const reducers = combineReducers({
  person: personSliceReducer,
  [persons.reducerPath]: persons.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['person']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(persons.middleware).concat(createDebugger())
});

// Infer the `RootState` and `AppDispatch` types from the store itsel
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
