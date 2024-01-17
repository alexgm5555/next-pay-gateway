import { UserInterface } from '@/app/lib/data/interfaces';
import { createSlice } from '@reduxjs/toolkit';


const initialState: UserInterface = {
  name: "",
  email: "",
  products: [],
  total: '0.0'
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRegister: (state, action) => {
      const { products, ...user } = action.payload;
      state = {...user}
    },
    addProduct: (state, action) => {
      const { product } = action.payload;
      state.products?.push(product);
    },
    removeProduct: (state, action) => {
      const { products } = action.payload;
      state.products = products;
    },
    sumTotal: (state, action) => {
      const { total } = action.payload;
      state.total = total;
    },
  }
});

export const {
  userRegister,
  addProduct,
  removeProduct,
  sumTotal
} = userSlice.actions;
export default userSlice.reducer;
