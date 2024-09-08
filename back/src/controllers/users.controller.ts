import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "This route will return all of the users of this app" });
};

const getUsersById = async (req: Request, res: Response): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "This route will return a user per id" });
};
const postNewUser = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "This route will create a new user" });
};
const loginUser = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "This route will log in a user" });
};

export { getAllUsers, getUsersById, postNewUser, loginUser };
