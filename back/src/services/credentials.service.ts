import { CredentialsDTO } from "../dto/CredentialsDTO";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

const CredentialEntity = AppDataSource.getRepository(Credential);

const createCredentialsService = async (
  credentials: CredentialsDTO
): Promise<Credential> => {
  const { username, password } = credentials;

  const newCredentials: Credential = CredentialEntity.create({
    username,
    password,
  });
  await CredentialEntity.save(newCredentials);
  return newCredentials;
};

const checkCredentialsService = async (
  credentials: CredentialsDTO
): Promise<User | null> => {
  const { username, password } = credentials;

  const credsFound: Credential | null = await CredentialEntity.findOne({
    where: { username },
    relations: ["user"],
  });
  if (credsFound?.password === password) return credsFound.user;
  else return null;
};
export { createCredentialsService, checkCredentialsService };
