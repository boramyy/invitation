import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Message } from "../entity/Message";
const messageRepository = getManager().getRepository(Message);

/**
 * Loads all posts from the database.
 */
export async function getMessageList(request: Request, response: Response) {

  console.log("get all messages controller");

  // load a post by a given post id
  const messageList = await messageRepository.find();

  // return loaded posts
  response.send(messageList);
  
  // response.json([
  //   {
  //     id: 1,
  //     name: "Hiccup",
  //     password: "hiccup"
  //   },
  //   {
  //     id: 2,
  //     name: "King Arthur",
  //     password: "king-arthur"
  //   }
  // ]);

}