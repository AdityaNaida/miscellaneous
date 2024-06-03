const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  const { username, password } = req.query;
  res.send(`Standard GET request! welcome ${username}`);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.send(`Standard POST request! welcome ${username}`);
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
