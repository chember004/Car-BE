import mongoose from "mongoose";
import { createApp } from "./createApp";

mongoose
  .connect("mongodb://127.0.0.1/car_be")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(`Error: ${err}`));
const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
