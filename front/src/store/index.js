import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
// import { loggerMiddleware } from "../middleware/logger";
import notificationsSlice from "./reducers/notifications";
import fetchDataSlice from "./reducers/fetchDataSlice";
import { rtkFetchingApi } from "./services/rtkFetchingSlice";
import { pokemonApi } from "./services/pokemonApi";
import { mySocketApi } from "./services/mySocketApi";

export default configureStore({
  reducer: {
    user: userReducer,
    notifications: notificationsSlice,
    fetchedData: fetchDataSlice,
    [rtkFetchingApi.reducerPath]: rtkFetchingApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [mySocketApi.reducerPath]: mySocketApi.reducer,
  },
  middleware: (createDefaultMiddleware) => {
    return createDefaultMiddleware().concat(
      // loggerMiddleware,
      rtkFetchingApi.middleware,
      pokemonApi.middleware,
      mySocketApi.middleware
    );
  },
});
