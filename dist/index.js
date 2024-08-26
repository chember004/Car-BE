"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createApp_1 = require("./createApp");
const mongodb_1 = require("./db/mongodb");
// import { postgresqlConnect } from "./db/postgresql";
// import { pool } from "./server/postgresql";
(0, mongodb_1.mongooDbConnect)();
// postgresqlConnect();
const app = (0, createApp_1.createApp)();
const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});
