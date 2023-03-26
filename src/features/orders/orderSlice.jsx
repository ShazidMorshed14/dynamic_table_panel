import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../commons/utils";

const initialState = {
  obj: {},
  sort: { sort: "_id", order: "desc" },
  filterOrderStatus: [],
  filterPaymentStatus: [],
  page: 1,
  search: "",
  limit: 10,
  startDate: "",
  endDate: "",
  loading: false,
  expand: true,
  titleData: {},
  title: "",
};

export const fetchAsyncOrders = createAsyncThunk(
  "orders/fetchAsyncOrders",
  async ({
    page,
    sort,
    filterOrderStatus,
    filterPaymentStatus,
    search,
    startDate,
    endDate,
    limit,
  }) => {
    try {
      const url = `${API_URL}/orders/filtering?page=${page}&sort=${sort.sort},${
        sort.order
      }&order_status=${filterOrderStatus.toString()}&payment_status=${filterPaymentStatus.toString()}&search=${search}&start_date=${startDate.toString()}&end_date=${endDate.toString()}&limit=${limit}`;

      console.log("url->", url);
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAsyncTitle = createAsyncThunk(
  "orders/fetchAsyncTitle",
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/titles`);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    setStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
    setEndDate: (state, { payload }) => {
      state.endDate = payload;
    },
    setFilterOrderStatus: (state, { payload }) => {
      state.filterOrderStatus = payload;
    },
    setFilterPaymentStatus: (state, { payload }) => {
      state.filterPaymentStatus = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setLimit: (state, { payload }) => {
      state.limit = payload;
    },
    setExpand: (state, { payload }) => {
      state.expand = payload;
    },
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
  },
  extraReducers: {
    //fetching movies
    [fetchAsyncOrders.pending]: (state) => {
      console.log("pending");
      return { ...state, loading: true };
    },
    [fetchAsyncOrders.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, obj: payload, loading: false };
    },
    [fetchAsyncOrders.rejected]: () => {
      console.log("Rejected!");
    },

    //fetching title
    [fetchAsyncTitle.pending]: (state) => {
      console.log("pending");
      return { ...state, loading: true };
    },
    [fetchAsyncTitle.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        titleData: payload.title,
        title: payload.title.title,
        loading: false,
      };
    },
    [fetchAsyncTitle.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const {
  setSearch,
  setSort,
  setStartDate,
  setEndDate,
  setFilterOrderStatus,
  setFilterPaymentStatus,
  setPage,
  setLimit,
  setExpand,
  setTitle,
} = orderSlice.actions;

export default orderSlice.reducer;
