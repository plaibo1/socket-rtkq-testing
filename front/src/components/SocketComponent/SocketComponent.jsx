import React, { useEffect } from "react";
import { useGetMessageQuery } from "../../store/services/mySocketApi";
import { SocketMouseField } from "./SocketMouse/SocketMouseField";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store/reducers/notifications";

export const SocketComponent = () => {
  const { currentData } = useGetMessageQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentData?.[0]?.status === "ok") {
      dispatch(
        setNotification({
          message: `your id is ${currentData[0].userId}`,
          type: "success",
        })
      );
    }
  }, [currentData, dispatch]);

  return (
    <div className="relative border border-slate border-dashed p-4 rounded-xl">
      <div className="text-4xl font-black mb-10 text-center">
        socket component
      </div>

      <SocketMouseField />

      {/* <div className="flex justify-center">
        <DefaultButton disabled={isLoading} onClick={handleFetch}>
          Fetch Pokemon
        </DefaultButton>
      </div> */}
    </div>
  );
};
