import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHobby, myAction } from "../../store/reducers/userReducer";
import { DefaultButton } from "../BaseComponents/DefaultButton/DefaultButton";
import { setNotification } from "../../store/reducers/notifications";

export const UserHobbies = () => {
  const hobbies = useSelector((state) => state.user.hobbies);
  const [hobbyText, setHobbyText] = useState("");
  const dispatch = useDispatch();

  const testMyAction = () => {
    dispatch(myAction({ a: 2, b: 3 }));
  };
  const testHandwrite = () => {
    dispatch({ type: "some/other/action", payload: "JAMAL" });
  };

  const handleAddHobby = (e) => {
    e.preventDefault("");
    if (hobbyText.trim().length === 0) return;
    dispatch(addHobby(hobbyText));
    setHobbyText("");
    dispatch(
      setNotification({
        message: `hobby ${hobbyText} added successfully`,
        type: "success",
      })
    );
  };

  return (
    <div className="border-2 border-slate-200 rounded-xl mt-10 p-4">
      <ul className="mb-4">
        {hobbies.map((item) => {
          return (
            <li key={item.id} className="font-semibold">
              {item.name}
            </li>
          );
        })}
      </ul>

      <div className="flex mb-4">
        <form onSubmit={handleAddHobby}>
          <input
            type="text"
            value={hobbyText}
            onChange={(e) => setHobbyText(e.target.value)}
            className="bg-slate-100 p-4"
          />
          <button
            className="bg-indigo-500 rounded-md p-3 text-white font-semibold mr-4"
            type="submit"
          >
            ADD HOBBY
          </button>
        </form>
      </div>

      <div>
        <DefaultButton onClick={testMyAction}>test mysAction</DefaultButton>
        <DefaultButton onClick={testHandwrite}>
          test handwrite actions
        </DefaultButton>
      </div>
    </div>
  );
};
