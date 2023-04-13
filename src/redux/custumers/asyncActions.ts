import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICreateThunk } from "../../types";


export const fetchAllCustomers = createAsyncThunk<ICreateThunk>(
  "customers/getCustomers",
  async () => {

    const { data } = await axios.get<ICreateThunk>(
      `https://jsonplaceholder.typicode.com/users`
    );
    return data;
  }
);