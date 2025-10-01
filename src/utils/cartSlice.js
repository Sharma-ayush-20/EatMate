import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //key value pair
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
        state.items.push(action.payload);
    },
    removeItems: (state, action) => {
        state.items.pop();
    },
    emptyItems: (state, action) => {
        state.items.length = 0;  //[]
    }
  },
});

export const { addItems, removeItems, emptyItems } = cartSlice.actions;
export default cartSlice.reducer;
