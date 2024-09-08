import express from "express";
import morgan from "morgan";
import routes from "./routes";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(routes);

export default server;
