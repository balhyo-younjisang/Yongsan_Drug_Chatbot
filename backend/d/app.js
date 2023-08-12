
const express = require('express');
const router = require("./routes/router");
const { callChatGpt } = require('./controller/controller');
const app = express();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use("/", router);

io.on('connection', (socket) => {
  console.log("user connect");

  socket.on('disconnect', () => {
    console.log("user disconnect");
  });

  socket.on('chat-msg', async (msg) => {
    // console.log(msg);
    try {
      const message = await callChatGpt(msg);

      socket.emit('return', message);
    } catch (err) {
      console.error("Error : ", err);
    }
  });
})

http.listen(3000, () => {
  console.log("Listening");
})