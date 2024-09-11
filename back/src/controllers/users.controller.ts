import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  newUserService,
} from "../services/users.service";

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await getAllUsersService();
  return res.status(200).json(allUsers);
};

const getUsersById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const userFound = await getUserByIdService(Number(id));
  return res.status(200).json(userFound);
};
const postNewUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, password, name, email, birthdate, nDni } = req.body;
  const newUser = await newUserService({
    username,
    password,
    name,
    email,
    birthdate,
    nDni,
  });
  return res.status(200).json(newUser);
};
const loginUser = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "This route will log in a user" });
};

export { getAllUsers, getUsersById, postNewUser, loginUser };
