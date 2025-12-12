import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk(
  // thunk menangkap data dulu, lalu setelah itu dikirim ke store melalui fullfilled
  "products/addProducts",
  async (payload, { getState, rejectWithValue }) => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 4000);
      });

      // return data jadi fulfilled
      const { lastID } = getState().product;
      return { ...payload, id: lastID + 1 }; // masukin id saat add products
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
//
export const deleteProductThunk = createAsyncThunk(
  "products/deleteProducts",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const currentProducts = getState().product.products;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newProducts = currentProducts.filter((item) => {
        return item.id !== payload;
      });
      // filter Membuat ARRAY BARU
      // Item yang kondisi-nya TRUE akan disimpan
      // Item yang FALSE dibuang, filter tidak mengubah array asli, dia bikin array baru.
      // Jika return TRUE → item disimpan
      // Jika return FALSE → item dibuang
      //
      return newProducts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editProductThunk = createAsyncThunk(
  "products/editProduct",
  async (payload, { getState, rejectWithValue }) => {
    try {
      // Payload berisi: { id, nameProduct, quantity, productPrice, status }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const { products } = getState().product;

      // buat array baru & ganti product yang punya id sama
      const updated = products.map((item) =>
        item.id === payload.id ? payload : item,
      );

      return updated; // hasil masuk ke fulfilled
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

//
// disable di button harus false, kalau data lagi dikirim
//

const initialState = {
  products: [],
  lastID: 0,
  getDataStatus: {
    product: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  },
  errors: {
    product: null,
  },
};
//

const productSlice = createSlice({
  initialState,
  name: "products",
  //   reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getProductsThunk, {
        pending: (prevState) => {
          prevState.getDataStatus.product.isLoading = true;
          prevState.getDataStatus.product.isSuccess = false;
          prevState.getDataStatus.product.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.getDataStatus.product.isLoading = false;
          prevState.getDataStatus.product.isSuccess = true;
          prevState.products.push(payload);
          prevState.lastID = payload.id;
        },
        rejected: (prevState, { payload }) => {
          prevState.getDataStatus.product.isLoading = false;
          prevState.getDataStatus.product.isFailed = true;
          prevState.errors.product = payload;
        },
      })
      .addAsyncThunk(deleteProductThunk, {
        pending: (prevState) => {
          prevState.getDataStatus.product.isLoading = true;
          prevState.getDataStatus.product.isSuccess = false;
          prevState.getDataStatus.product.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.getDataStatus.product.isLoading = false;
          prevState.getDataStatus.product.isSuccess = true;
          prevState.products = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.getDataStatus.product.isLoading = false;
          prevState.getDataStatus.product.isFailed = true;
          prevState.errors.product = payload;
        },
      })
      .addAsyncThunk(editProductThunk, {
        pending: (state) => {
          state.getDataStatus.product.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          state.getDataStatus.product.isLoading = false;
          state.getDataStatus.product.isSuccess = true;
          state.products = payload; // replace dengan array hasil edit
        },
        rejected: (state, { payload }) => {
          state.getDataStatus.product.isLoading = false;
          state.getDataStatus.product.isFailed = true;
          state.errors.product = payload;
        },
      });
  },
});

// const productSlice = createSlice({
//   initialState,
//   name: "product",
//   reducers: {
//     addProduct: (prevState, action) => {
//       prevState.products.push(action.payload);
//     },
//     editProduct: (prevState, action) => {
//       prevState.products;
//     },
//     removeProduct: (prevState) => {
//       prevState.products = [];
//     },
//   },
// });

// export const { addProduct, editProduct, removeProduct } = productSlice.actions;

export const productActions = {
  ...productSlice.actions,
  getProductsThunk,
};
export default productSlice.reducer; // untuk store
