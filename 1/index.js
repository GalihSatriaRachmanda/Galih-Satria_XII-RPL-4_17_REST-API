const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

app.get('/', (req, res) => {
  let response = {
    message: "Welcome!",
    method: req.method,
    code: res.statusCode
  }
  res.json(response)
})

app.post("/kubus", (req, res) => {
  let sisi = Number(req.body.sisi)
  let volume = sisi * sisi * sisi
  let permukaan = 6 * (sisi * sisi)
  let response = {
    sisi: sisi,
    volume: volume,
    permukaan: permukaan
  }
  res.json(response)
})

app.post("/balok", (req, res) => {
  let panjang = Number(req.body.panjang)
  let lebar = Number(req.body.lebar)
  let tinggi = Number(req.body.tinggi)
  let volume = panjang * lebar * tinggi
  let permukaan = 2 * ((panjang * lebar) + (lebar * tinggi) + (panjang * tinggi))
  let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    volume: volume,
    permukaan: permukaan
  }
  res.json(response)
})

app.post("/tabung", (req, res) => {
  let phi = 22 / 7
  let diameter = Number(req.body.diameter)
  let tinggi = Number(req.body.tinggi)
  let jari2 = diameter / 2
  let alas = phi * jari2 * jari2
  let selimut = 2 * phi * jari2 * tinggi
  let volume = alas * tinggi
  let permukaan = 2 * alas + selimut
  let response = {
    diameter,
    jari2,
    tinggi,
    volume,
    alas,
    selimut,
    permukaan
  }
  res.json(response)
})

app.post("/bola", (req, res) => {
  let phi = 22 / 7
  let diameter = Number(req.body.diameter)
  let jari2 = diameter / 2
  let volume = 4 / 3 * phi * jari2 * jari2 * jari2
  let permukaan = 4 * phi * jari2 * jari2
  let response = {
    diameter,
    jari2,
    volume,
    permukaan
  }
  res.json(response)
})

app.listen(6809, () => {
  console.log("Server Running On Port 6809")
})