const axios = require('axios')

console.log("start")
const sendReq = async (num) => {
  console.time(`${num}`)
  return await axios.get("http://localhost:3000/", {
    timeout: 1000000
  })
    .then((ret) => {
      console.log(ret.data)
      console.timeEnd(`${num}`);
    })
    .catch((err) => {
      console.error(err.response)
      console.timeEnd(`${num}`);
    })
}

const test = async () => {
    const arr = [
      1,2,3,4,5,6,7,8,9,10,
      11,12,13,14,15,16,17,18,19,20,
      21,22,23,24,25,26,27,28,29,30
    ];
    // const arr = [
    //   1
    // ];
    
    const promises = arr.map(async (num) => {
      return await sendReq(num);
    })

    try {
      await Promise.all(promises);
    } catch (err) {
      console.error(err)
    }
}

(async () => {
  await test();
})();
