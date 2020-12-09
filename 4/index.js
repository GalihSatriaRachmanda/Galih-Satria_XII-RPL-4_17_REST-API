const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  let response = {
    message: "Welcome!",
    method: req.method,
    code: res.statusCode,
  };
  res.json(response);
});

app.post("/bmi", (req, res) => {
  let berat = Number(req.body.berat);
  let tinggi = Number(req.body.tinggi);
  let a = tinggi / 100;
  let bmi = berat / (a * a);
  let result = Math.round(bmi * 100) / 100;
  let status = [
    "Kekurangan Berat Badan",
    "Normal (Ideal)",
    "Kelebihan Berat Badan",
    "Kegemukan (Obesitas)",
  ];
  let response = {berat,tinggi,bmi: Math.round(bmi)}
  if (result < 18.5) {response = {...response,status: status[0]};
  } else if (result < 25) {response = {...response, status: status[1]};
  } else if (result < 30) {response = {...response, status: status[2]};
  } else {response = {...response, status: status[3]}}
  res.send(response);
});
app.listen(6809, () => console.log("Server Running!"));
