// import { Pool } from "pg";
import { sequelize } from "../models/postgresql";
// export const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: parseInt(process.env.DB_PORT || "5432", 10),
// });

// Sync DB
export const postgresqlConnect = () => {
  sequelize
    .sync()
    .then(() =>
      console.log(
        "****************\n\n Connected to the POSTGRESQL database \n\n****************"
      )
    );
  return sequelize;
};
