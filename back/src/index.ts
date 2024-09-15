import server from "./server";
import { PORT } from "./config/envs";
import { initializeDataSource } from "./config/data-source";

try {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  initializeDataSource();
} catch (error) {
  console.log(error);
}
