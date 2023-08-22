import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLastName, changeName } from "../../store/reducers/userReducer";
import { Input } from "../BaseComponents/Input/Input";

export const UserNameChanger = () => {
  const name = useSelector((state) => state.user.name);
  const lastName = useSelector((state) => state.user.lastName);

  const dispatch = useDispatch();

  const changeNameHandler = (e) => {
    dispatch(changeName(e.target.value));
  };

  const changeLastNameHandler = (e) => {
    dispatch(changeLastName(e.target.value));
  };

  return (
    <div className="border-2 border-slate-200 rounded-xl p-4">
      <div className="text-xl mb-4 font-bold">
        {name} {lastName}
      </div>

      <Input
        type="text"
        name="userName"
        onChange={changeNameHandler}
        value={name}
      />
      <Input
        type="text"
        name="userLastName"
        onChange={changeLastNameHandler}
        value={lastName}
      />
    </div>
  );
};
