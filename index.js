import express from "express";

const PORT = 3000;
const app = express();

app.set('json spaces', 4);

app.get('/', (req, res) => res.json({status: "LukTask API"})); 

app.get('/tasks', (req, res) => {
  res.json({
    tasks: [
      {title: "Learning NodeJS"},
      {title: "Making apis"}
    ]
  });
});

app.listen(PORT, () => console.log("LukTask API - porta ${PORT}"));
