import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkFetchingApi = createApi({
  reducerPath: "rtkFetching",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users?fake=1",
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useLazyGetAllUsersQuery } = rtkFetchingApi;
