import React, { useEffect, useState } from "react";
import { SocketMouse } from "./SocketMouse";
import {
  useGetCoordsQuery,
  useSendMouseCoordsMutation,
} from "../../../store/services/mySocketApi";

export const SocketMouseField = () => {
  const [sendCoords] = useSendMouseCoordsMutation();
  const { data } = useGetCoordsQuery();
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    sendCoords(coords);
  }, [coords, sendCoords]);

  const handleWSMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="border border-dashed min-h-[400px]"
      onMouseMove={handleWSMouseMove}
    >
      <SocketMouse x={coords.x} y={coords.y} />

      {data && <SocketMouse color="#acd123" x={data[0].x} y={data[0].y} />}
    </div>
  );
};
