import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartProductType} from "@/lib/definitions";
import {RootState} from "@/redux/store";

const initialState = {
    products: [] as CartProductType[],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProductType>) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.products.findIndex(product => product.id === productToAdd.id);
            const price = parseFloat(productToAdd.price.toString());
            if (existingProductIndex === -1) {
                state.products.push(productToAdd);
                state.totalPrice += price;
            } else {
                state.totalPrice += price;
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const product = state.products.find((product) => product.id === action.payload);
            if (product) {
                state.totalPrice -= parseFloat(String(product.price)) || 0;
            }
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
            if (state.products.length === 0) {
                state.totalPrice = 0;
            }
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectProducts = (state: RootState) => state.cart.products;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;


