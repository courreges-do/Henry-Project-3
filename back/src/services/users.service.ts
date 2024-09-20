import { CreateUserDTO } from "../dto/CreateUserDTO";
import { createCredentialsService } from "./credentials.service";
import { User } from "../entities/User";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

const UserEntity = AppDataSource.getRepository(User);

const getAllUsersService = async (): Promise<User[]> => {
  const users: User[] = await UserEntity.find({
    relations: { credential: false, appointments: true },
  });
  return users;
};

const getUserByIdService = async (id: number): Promise<User | null> => {
  return await UserEntity.findOne({
    where: { id },
    relations: { appointments: true },
  });
};

const newUserService = async (userdata: CreateUserDTO) => {
  const { username, password, name, email, birthdate, nDni } = userdata;

  const newCredentials = await createCredentialsService({ username, password });

  const newUser: User = UserEntity.create({
    name,
    email,
    birthdate,
    nDni,
    credential: newCredentials,
  });

  newCredentials.user = newUser;
  await UserEntity.save(newUser);
  await AppDataSource.getRepository(Credential).save(newCredentials);

  return newUser;
};

export { getAllUsersService, getUserByIdService, newUserService };
