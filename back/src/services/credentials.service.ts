import { CredentialsDTO } from "../dto/CredentialsDTO";
import ICredential from "../interfaces/ICredential";

const credentialsDB: ICredential[] = [];
let id: number = 1;

const createCredentialsService = async (
  credentials: CredentialsDTO
): Promise<number> => {
  const { username, password } = credentials;

  const newCredentials: ICredential = {
    id,
    username,
    password,
  };
  id++;
  credentialsDB.push(newCredentials);
  return newCredentials.id;
};

const checkCredentialsService = async (
  credentials: CredentialsDTO
): Promise<number> => {
  const { username, password } = credentials;

  const credsFound: ICredential | undefined = credentialsDB.find(
    (cred): boolean => cred.username === username
  );

  if (credsFound) {
    if (credsFound.password === password) return credsFound.id;
    return 0;
  } else return 0;
};

export { createCredentialsService, checkCredentialsService };
