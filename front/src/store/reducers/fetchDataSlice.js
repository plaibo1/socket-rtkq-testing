import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

export const sanka = createAsyncThunk(
  "fetchedData/sanka",
  async (someData, thunkAPI) => {
    console.log({ someData, thunkAPI });
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res = await fetch("https://jsonplaceholder.typicode.com/userswaawd"); // empty object
    // const res = await fetch("httpasds://jsonplaceholder.typicode.com/userswaawd"); // error
    return res.json();
  }
);

const fetchedDataSlice = createSlice({
  name: "fetchedData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sanka.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(sanka.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(sanka.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "some error";
    });
  },
});

export default fetchedDataSlice.reducer;
