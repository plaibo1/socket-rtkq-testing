import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getSocket } from "../../utils/socketInstance";

export const mySocketApi = createApi({
  reducerPath: "mySocketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getMessage: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = getSocket();

        try {
          await cacheDataLoaded;
          socket.on("successfullyConnected", (message) => {
            updateCachedData((draft) => {
              draft[0] = message;
            });
          });
        } catch (err) {
          console.error(err);
        }

        await cacheEntryRemoved;
        socket.disconnect();
      },
    }),
    sendMouseCoords: builder.mutation({
      queryFn: (coords) => {
        const socket = getSocket();
        return new Promise((resolve) => {
          socket.emit("sendCoords", coords, (message) => {
            resolve({ data: message });
          });
        });
      },
    }),
    getCoords: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = getSocket();

        try {
          await cacheDataLoaded;
          socket.on("getCoords", (coords) => {
            console.log(
              "🚀 ~ file: mySocketApi.js:54 ~ socket.on ~ coords:",
              coords
            );
            updateCachedData((draft) => {
              draft.splice(0, draft.length, coords);
            });
          });
        } catch (err) {
          console.error(err);
        }

        await cacheEntryRemoved;
        socket.disconnect();
      },
    }),
  }),
});

export const {
  useGetMessageQuery,
  useSendMouseCoordsMutation,
  useGetCoordsQuery,
} = mySocketApi;
