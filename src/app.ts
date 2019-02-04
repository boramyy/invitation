import "reflect-metadata";
import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";
import { Message } from "./entity/Message";

const router = require("./routes/message");

// create typeorm connection
createConnection().then(connection => {
  const messageRepository = connection.getRepository(Message);

  // create and setup express app
  const app = express();
  app.use(bodyParser.json());
  app.use("/message", router);

  // register routes

  // app.get("/messages", async function (req: Request, res: Response) {
  //   return messageRepository.find();
  // });

  // app.get("/messages/:id", async function(req: Request, res: Response) {
  //   return messageRepository.findOne(req.params.id);
  // });

  // app.post("/users", async function (req: Request, res: Response) {
  //   const user = messageRepository.create(req.body);
  //   return messageRepository.save(user);
  // });

  // app.put("/users/:id", function (req: Request, res: Response) {
  //   const message = messageRepository.findOne(req.params.id);
  //   messageRepository.merge(message, req.body);
  //   return messageRepository.save(message);
  // });

  // app.delete("/message/:id", async function(req: Request, res: Response) {
  //   return messageRepository.remove(req.params.id);
  // });

  // start express server
  app.listen(3000, (err: any) => {
    if (err) throw err
    console.log('> ready on http://localhost:3000')
  });
});