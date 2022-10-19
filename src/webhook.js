import express from "express";
import bodyParser from "body-parser";
import { messageJusto } from "./msgPreparado.js";
import { discordSend } from "./brain.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

//Edit the endpoint

app.post("/yourEndPoint", (req, res) => {
  const { msg } = messageJusto(req.body);
  setTimeout(() => discordSend(msg), 1000);
  res.status(200).end();
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
