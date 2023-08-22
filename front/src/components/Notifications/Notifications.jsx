import React from "react";
import { useSelector } from "react-redux";
import { NotificationsBox } from "./NotificationsBox";

export const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);

  return (
    notifications.length !== 0 && (
      <div className="fixed right-4 top-4 flex flex-col-reverse">
        {notifications.map(({ id, ...props }) => {
          return <NotificationsBox key={id} id={id} {...props} />;
        })}
      </div>
    )
  );
};
