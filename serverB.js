const express = require('express')
const app = express();

app.get("/", (req, res) => {
  // res.send("fff")
})

const server = app.listen(5000, ()=> {
  console.log("bbbb")
})

server.timeout = 100000
server.keepAliveTimeout = 100000