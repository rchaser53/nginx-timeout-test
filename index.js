const axios = require('axios')

console.log("start")
console.time("ssss");
axios.get("http://localhost:3000/", {
  timeout: 1000000
})
  .then((ret) => {
    console.log(ret.data)
    console.timeEnd("ssss");
  })
  .catch((err) => {
    console.error(err)
    console.timeEnd("ssss");
  })