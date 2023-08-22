import { io } from "socket.io-client";

let socket;
export function getSocket() {
  if (!socket) {
    socket = io("ws://localhost:8000");
  }
  return socket;
}
