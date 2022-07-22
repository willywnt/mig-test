const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');
const axios = require("axios");
app.use(express.static(publicPath));

let jsonParser = bodyParser.json();

const axiosInstance = axios.create({
  baseURL: 'https://mitramas-test.herokuapp.com'
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post("/auth/login", jsonParser, async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const response = await axiosInstance.post("/auth/login", { email, password }, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    res.status(200).json(response.data);

  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/customers", jsonParser, async (req, res, next) => {
  const { _token } = req.body;

  try {
    const response = await axiosInstance.get("/customers", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': _token
      },
      withCredentials: true
    });
    res.status(200).json(response.data.data);

  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete("/customers/:id/:token", jsonParser, async (req, res, next) => {
  const { token, id } = req.params;

  try {
    const response = await axiosInstance.delete(`/customers?id=${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        withCredentials: true
      }
    );
    res.status(200).json(response.data);

  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});