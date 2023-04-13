import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllCustomers } from './asyncActions';
import { ICreateThunk, ICustomers, ICustomersSliceState } from "../../types";



const initialState: ICustomersSliceState = {
  customersItems: [],
  loading: 'loading'

};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    getCustomers: (state, action: PayloadAction<ICustomers[]>) => {
      state.customersItems = [...action.payload];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllCustomers.pending, (state) => {
      state.customersItems = [];
      state.loading = 'loading';
    });

    builder.addCase(
      fetchAllCustomers.fulfilled,
      (state: any, action: PayloadAction<ICreateThunk>) => {
        state.customersItems = action.payload;
        state.loading = 'success';


      }
    );
    builder.addCase(fetchAllCustomers.rejected, (state) => {

      state.customersItems = [];
      state.loading = 'error';
    });
  },
});



export const { getCustomers } = customersSlice.actions;
export default customersSlice.reducer