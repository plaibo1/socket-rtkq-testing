import React from "react";
import { UserHobbies } from "./UserHobbies";
import { UserNameChanger } from "./UserNameChanger";

export const User = () => {
  return (
    <div>
      <UserNameChanger />
      <UserHobbies />
    </div>
  );
};
