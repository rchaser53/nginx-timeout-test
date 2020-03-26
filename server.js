const express = require('express')
const app = express();

app.get("/", (req, res) => {
  // res.send("fff")
})

const server = app.listen(4000, ()=> {
  console.log("aa")
})

server.timeout = 10000