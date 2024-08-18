import { createApp } from "./createApp";
import { mongooDbConnect } from "./server/mongodb";
import { postgresqlConnect } from "./server/postgresql";
// import { pool } from "./server/postgresql";

mongooDbConnect();
postgresqlConnect();
const app = createApp();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
