import { CreateUserDTO } from "../dto/CreateUserDTO";
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentials.service";

const usersDB: IUser[] = [];
let id: number = 1;

const getAllUsersService = async (): Promise<IUser[]> => {
  return usersDB;
};

const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
  const foundUser = usersDB.find((usr) => usr.id === Number(id));
  return foundUser;
};

const newUserService = async (userdata: CreateUserDTO) => {
  const { username, password, name, email, birthdate, nDni } = userdata;

  const credentialsID = await createCredentialsService({ username, password });

  const newUser: IUser = {
    id,
    name,
    email,
    birthdate,
    nDni,
    credentialsId: credentialsID,
  };

  id++;
  usersDB.push(newUser);

  return newUser;
};

export { getAllUsersService, getUserByIdService, newUserService };
