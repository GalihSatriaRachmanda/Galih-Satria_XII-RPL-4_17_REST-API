const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors());

app.get('/', (req, res) => {
  let response = {
    message: "Welcome!",
    method: req.method,
    code: res.statusCode
  }
  res.json(response)
})

app.post("/hex-dec", (req, res) => {
  const hex = String(req.body.hex)
  const dec = parseInt(hex, 16)
  const response = {
    dec
  }
  res.send(response)
})

app.post("/dec-bin", (req, res) => {
  const dec = parseInt(req.body.dec)
  const bin = dec.toString(2)
  const response = {
    bin
  }
  res.send(response)
});

app.post("/bin-dec", (req, res) => {
  const bin = String(req.body.bin)
  const dec = parseInt(bin, 2)
  const response = {
    dec
  }
  res.send(response)
})

app.post("/oct-dec", (req, res) => {
  const oct = Number(req.body.oct)
  const dec = parseInt(oct, 8)
  const response = {
    dec
  }
  res.send(response)
})


app.listen(6809, () => console.log("Server Running!"));