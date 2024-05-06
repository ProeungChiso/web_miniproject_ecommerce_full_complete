import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "@/redux/features/cart/cartSlice";
import authSlice from "@/redux/features/auth/authSlice";
import {productApi} from "@/redux/service/product";

// Create Store
export const makeStore = () => {
    return configureStore({
        reducer: {
            [productApi.reducerPath]: productApi.reducer,
            cart:cartSlice,
            auth:authSlice,
        },
        middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(productApi.middleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']