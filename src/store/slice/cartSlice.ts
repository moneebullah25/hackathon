import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/lib/getProducts";
import { RootState } from "../store";

export interface CartState {
    cartItems: Product[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find((p) => p.title === action.payload.title);
            if (item) {
                item.quantity++;
                item.price = item.price * item.quantity
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        updateCart: (state, action: PayloadAction<Product>) => {
            const { title, quantity, price } = action.payload;
            const existingItem = state.cartItems.find((item) => item.title === title);

            if (existingItem) {
                existingItem.quantity = quantity;
                existingItem.price = 1 * price
            }
            
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.title !== action.payload
            );
        },
    },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;