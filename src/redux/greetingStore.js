import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../components/greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
