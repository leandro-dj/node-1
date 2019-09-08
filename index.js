const express = require("express");

const server = express();

server.get("/test", (req, res) => {
  res.send("maoi");
});

server.get("/lutador/:nome", (req, res) => {
  console.log(req.params);
  const { nome } = req.params;

  res.send(`o lutador lutar em otrora chamado ${nome}`);
});

server.listen(3000);
