import { UserInterface } from '@/app/lib/interfaces';
import { getHashPayment } from '@/app/lib/util/getHashPayment';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';



const initialState: UserInterface = {
  name: "",
  email: "",
  products: [],
  total: 0,
  idTran: ''
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
      state.idTran = uuid();
    },
    addidTran: (state, action) => {
      const { id } = action.payload;
      state.idTran = id;
    },
  }
});

export const {
  userRegister,
  addProduct,
  removeProduct,
  sumTotal,
  addidTran
} = userSlice.actions;
export default userSlice.reducer;
