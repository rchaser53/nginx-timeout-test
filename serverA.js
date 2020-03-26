const axios = require('axios')
const express = require('express')
const app = express();

app.get("/", async (req, res) => {
  // res.send("fff")
  await axios.get("http://localhost:5000/", {
    timeout: 100000
  })
})

const server = app.listen(4000, ()=> {
  console.log("aaaa")
})

server.timeout = 100000
server.keepAliveTimeout = 100000