const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());

const data = fs.readFileSync("./users.json", "utf8");
const users = JSON.parse(data);

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((el) => el.id === parseInt(id));
  res.send(user);
});

app.get("/userbycity/:city", (req, res) => {
  let city = req.params.city;
   //TODO : get user by city
  res.send(user);
});

app.post("/user", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  let newUser = { name, age };
  users.push(newUser);

  fs.writeFileSync("./users.json", JSON.stringify(users));
  res.send({ success: true });
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  //TODO : add update function
  
  res.send({ success: true });
});

app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  //TODO : add delete function

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
