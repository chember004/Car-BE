import { createApp } from "./createApp";
import { mongooDbConnect } from "./db/mongodb";
// import { postgresqlConnect } from "./db/postgresql";

mongooDbConnect();
// postgresqlConnect();
const app = createApp();

const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
