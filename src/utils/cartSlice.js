import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //key value pair
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const existingItems = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItems: (state, action) => {
      const existingItems = state.items.find((item) => item.card.info.id === action.payload.card.info.id)
      if(existingItems){
        if(existingItems.quantity > 1){
          existingItems.quantity -= 1;
        }else{
          state.items = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id)
        }
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
