import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  newUserService,
} from "../services/users.service";
import { checkCredentialsService } from "../services/credentials.service";

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await getAllUsersService();
  return res.status(200).json(allUsers);
};

const getUsersById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const userFound = await getUserByIdService(Number(id));
    return userFound
      ? res.status(200).json(userFound)
      : res.status(404).json({ message: "The user does not exist" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
const postNewUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password, name, email, birthdate, nDni } = req.body;
    if (!username || !password || !name || !email || !birthdate || !nDni)
      return res
        .status(400)
        .json({ error: "Incomplete data, missing information" });
    const newUser = await newUserService({
      username,
      password,
      name,
      email,
      birthdate,
      nDni,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "Incomplete data" });

    const admittedUser = await checkCredentialsService({ username, password });
    return admittedUser
      ? res.status(200).json({ login: true, admittedUser })
      : res.status(400).json({ login: false });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

export { getAllUsers, getUsersById, postNewUser, loginUser };
