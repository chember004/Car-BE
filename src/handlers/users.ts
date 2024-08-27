import { Request, Response } from "express";
import { CreateUserDto, UserIdQueryParams } from "../types/users";
import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../utils/helpers";
import { User } from "../models/mongoose/schemas/local-user";

export const getUsers = async (req: Request, res: Response) => {
  const getUsers = await User.find();
  return res.send(getUsers);
  // return res.send([]);
};
export const getUserById = async (
  req: Request<UserIdQueryParams, {}, {}>,
  res: Response
) => {
  const { username } = req.params;
  const findUser = await User.findOne({ username });
  // console.log(req.query, req.params);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
};

export const createUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  console.log("/api/user POST method");
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  const newUser = new User(data);
  console.log(newUser);
  try {
    const savedUser = await newUser.save();
    return res.status(201).send(savedUser);
  } catch (err) {
    return res.sendStatus(400);
  }
};
