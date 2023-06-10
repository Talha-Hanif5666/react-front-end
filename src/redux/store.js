import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {
  randomGreeting: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_GREETING':
      return { ...state, randomGreeting: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
