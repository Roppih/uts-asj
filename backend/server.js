const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const API_URL = "http://api:8080";

app.get("/", (req, res) => {
  res.send("Backend Service Running");
});

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/users");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

