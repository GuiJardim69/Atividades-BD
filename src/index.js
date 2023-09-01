import dotenv from "dotenv";
import express from "express";
dotenv.config();

import roteadorUsuario from "./routes/usuario.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/GuiJardim69/Atividades-BD",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});
