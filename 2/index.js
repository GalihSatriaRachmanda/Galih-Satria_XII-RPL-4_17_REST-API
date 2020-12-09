const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  express.json({
    extended: true,
  })
);

app.use(cors());

app.get("/celcius/:no", (req, res) => {
  const celcius = Number(req.params.no);
  const Reamur = (celcius * 4) / 5;
  const Fahrenheit = (celcius * 9) / 5 + 32;
  const Kelvin = Math.floor(celcius + 273.5);
  const response = {
    celcius,
    response: {
      Reamur,
      Fahrenheit,
      Kelvin,
    },
  };
  res.send(response);
});

app.get("/reamur/:no", (req, res) => {
  const reamur = Number(req.params.no);
  const Celcius = reamur * 1.25;
  const Fahrenheit = reamur * 2.25 + 32;
  const Kelvin = Math.floor(reamur * 1.25 + 273.15);
  const response = {
    reamur,
    response: {
      Celcius,
      Fahrenheit,
      Kelvin,
    },
  };
  res.send(response);
});

app.get("/kelvin/:no", (req, res) => {
  const kelvin = Number(req.params.no);
  const Celcius = Math.round(kelvin - 273.15);
  const Fahrenheit = Math.round(kelvin * 1.8 - 459.67);
  const Reamur = Math.round((kelvin - 273.15) * 0.8);
  const response = {
    kelvin,
    response: {
      Celcius,
      Fahrenheit,
      Reamur,
    },
  };
  res.send(response);
});

app.get("/fahrenheit/:no", (req, res) => {
  const fahren = Number(req.params.no);
  const Celcius = (fahren - 32) / 1.8;
  const Reamur = (fahren - 32) / 2.25;
  const Kelvin = (fahren + 459.67) / 1.8;
  const response = {
    fahren,
    response: {
      Celcius,
      Reamur,
      Kelvin,
    },
  };
  res.send(response);
});

app.listen(6809, () => console.log("Server Running!"));
