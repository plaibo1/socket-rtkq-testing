import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNotificationById } from "../../store/reducers/notifications";

export const NotificationsBox = ({ type, message, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch(removeNotificationById(id));
    }, 4000);

    return () => clearTimeout(timeId);
  }, [dispatch, id]);

  const handleClose = () => {
    dispatch(removeNotificationById(id));
  };

  return (
    <div
      onClick={handleClose}
      className={`${
        type === "success" ? "bg-green-300 text-black" : "bg-red-400"
      } w-96 p-4 text-white rounded-md mb-2`}
    >
      {message}
    </div>
  );
};
