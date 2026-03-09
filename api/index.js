const express = require("express");

const app = express();
app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const user = {
    id: users.length + 1,
    name,
    email
  };

  users.push(user);

  res.status(201).json(user);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({message:"User not found"});
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({message:"User deleted"});
});

app.listen(8080, () => {
  console.log("API running on port 8080");
});

