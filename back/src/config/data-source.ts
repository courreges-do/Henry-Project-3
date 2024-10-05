import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DB } from "./envs";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DB,
  synchronize: true,
  logging: false,
  entities: [Credential, User, Appointment],
  subscribers: [],
  migrations: [],
});

export const initializeDataSource = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connection with DB successfull");
  } catch (error) {
    console.log(error);
  }
};
