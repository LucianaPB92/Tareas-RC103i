const express = require("express");
const app = express();
const port = 3113;

app.get("/api", (req, res) => {
  res.send("Hola a todos ");
});
app.post("/", (req, res) => {
  res.send("Petición POST");
});

app.put("/api/:id", (req, res) => {
  res.send("Petición PUT");
});

app.delete("/api/:id", (req, res) => {
  res.send("Petición DELETE");
});

app.use(express.static("public"))

app.listen(port, () => {
  console.log("server online, port: ", port);
});
