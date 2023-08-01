import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/Reducers.jsx';

const store = configureStore({
  reducer: rootReducer,
});

export default store;