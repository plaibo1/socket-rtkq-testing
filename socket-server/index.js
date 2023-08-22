const express = require("express");
const { v4: uuid } = require("uuid");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const PORT = process.env.PORT || 8000;

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send(JSON.stringify({ lala: "hello" }));
});

const messages = [];
const users = {};

io.on("connection", (socket) => {
  const userId = "user__" + uuid();

  socket.emit("successfullyConnected", { status: "ok", userId });

  users[userId] = {
    connectionId: socket.id,
  };

  socket.on("sendCoords", (coords, callback) => {
    console.log("coords: ", coords);
    callback({ status: "oks" });
    socket.broadcast.emit("getCoords", coords);
  });

  // io.to(socket.id).emit("getHistory", messages);
  // io.emit("getOnlineUsers", users);

  socket.on("login", (user) => {
    // users[userId].username = user.username;
    // users[userId].avatar = user.userImg;
    // io.to(socket.id).emit("getUser", users[userId]);
    // io.emit("getOnlineUsers", users);
  });

  socket.on("sendMessage", (msg) => {
    // messages.unshift(msg);
    // socket.broadcast.emit("getMessage", msg);
    // io.to(socket.id).emit("getMessage", { ...msg, isYour: true });
  });

  socket.on("disconnect", (reason) => {
    delete users[userId];
    // -----
  });
});

server.listen(PORT, () => {
  console.log("listening on *: " + PORT);
});
