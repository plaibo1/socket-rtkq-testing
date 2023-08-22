import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [];
const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ message, type }) => {
        const id = nanoid();
        return {
          payload: { id, message, type },
        };
      },
    },
    removeNotificationById: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setNotification, removeNotificationById } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
