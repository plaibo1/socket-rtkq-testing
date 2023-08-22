import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  name: "Alex",
  lastName: "Jordan",
  hobbies: [
    { id: "1", name: "football" },
    { id: "2", name: "baseball" },
    { id: "3", name: "play piano" },
  ],
};

export const myAction = createAction("users/myAwesomeAction");

const myMatcher = (action) => {
  return action.payload?.a + action.payload?.b === 5;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload;
    },
    addHobby: {
      reducer: (state, action) => {
        state.hobbies.push(action.payload);
      },
      prepare: (name) => {
        const id = nanoid();
        return { payload: { id, name: name } };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(myAction, (state, action) => {
      state.hobbies.push({
        id: nanoid(),
        name: `my action with createAction ${
          action.payload.a + action.payload.b
        }`,
      });
    });

    builder.addCase("some/other/action", (state, action) => {
      state.hobbies.push({
        id: nanoid(),
        name: `some other action ${action.payload}`,
      });
    });

    builder.addMatcher(myMatcher, (state, action) => {
      state.hobbies.push({
        id: nanoid(),
        name: `MAAATCH`,
      });
    });

    // builder.addDefaultCase((state, action) => {
    //   state.hobbies.push({
    //     id: nanoid(),
    //     name: `DEFAULT LALALA`,
    //   });
    // });
  },
});

export const { changeName, changeLastName, addHobby } = usersSlice.actions;

export default usersSlice.reducer;
