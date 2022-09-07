import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (email) => `/users?email=${email}`,
        }),
    }),
});

export const { useGetUserQuery } = usersApi;
