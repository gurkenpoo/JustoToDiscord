import express from "express";
import bodyParser from "body-parser";
import { messageJusto } from "./bakeMsg.js";
import { discordSend } from "./botBrain.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

//Edit the endpoint

app.post("/yourEndPoint", (req, res) => {
  const { msg } = messageJusto(req.body);
  setTimeout(() => discordSend(msg), 1500);
  res.status(200).end();
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
