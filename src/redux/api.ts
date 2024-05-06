
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { setAccessToken } from "./features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DJANGO_API_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error?.status === 401) {
        const res = await fetch("http://localhost:3000/api/refresh", {
            method: "POST",
            credentials: "include",
        });
        if (res.ok) {
            const data = await res.json();
            api.dispatch(setAccessToken(data.accessToken));
            // re-run the query with the new token
            result = await baseQuery(args, api, extraOptions);
        } else {
            const res = await fetch("http://localhost:3000/api/logout", {
                method: "POST",
                credentials: "include",
            });
            const data = await res.json();
            console.log(data);
        }
    }
    return result;
};

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
});
