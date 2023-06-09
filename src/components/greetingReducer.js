import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

export const greetingsRequest = createAsyncThunk(
  'greetings/greetingsRequest',
  async () => {
    const response = await Axios.get('http://localhost:3000/api/greeting');
    const { greeting } = response.data;
    return greeting;
  },
);

const initialState = {
  greeting: '',
  loading: false,
  error: false,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(greetingsRequest.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(greetingsRequest.fulfilled, (state, action) => {
      const newState = { ...state, loading: false, greeting: action.payload };
      return newState;
    });
    builder.addCase(greetingsRequest.rejected, (state) => {
      const newState = { ...state, loading: false, error: true };
      return newState;
    });
  },
});

export default greetingSlice.reducer;