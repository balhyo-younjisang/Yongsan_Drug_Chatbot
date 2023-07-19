
const express = require('express');
const router = require("./routes/router");
const configuration = require("./modules/modules");
const { OpenAIApi } = require("openai")
const openai = new OpenAIApi(configuration);
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
    console.log(msg);
    try {
      const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: msg }],
      });

      const returnMsg = chatCompletion.data.choices[0].message.content;
      // console.log(returnMsg);

      socket.emit('return', returnMsg);
    } catch (err) {
      console.error("Error : ", err);
    }
  });
})

http.listen(3000, () => {
  console.log("Listening");
})