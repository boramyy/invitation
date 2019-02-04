const express = require('express');
const next = require('next');
const createConnection = require("typeorm").createConnection;
import { Message } from "./src/entity/Message";

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createConnection().then(connection => {
      const server = express();
      const messageRepository = connection.getRepository(Message);
      
      // server.use("/message", router);
      
      server.get("*", (req, res) => {
        return handle(req, res);
      });
      server.get("/message", async function (req, res) {
        return await messageRepository.find();
      });
      
      server.listen(3000, (err) => {
        if (err) throw err
        console.log('> ready on http://localhost:3000')
      });
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });