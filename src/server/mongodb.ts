import mongoose from "mongoose";

export const mongooDbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1/car_be")
    .then(() =>
      console.log(
        "****************\n\n Connected to the MONGODB database \n\n****************"
      )
    )
    .catch((err) => console.log(`Error: ${err}`));

  return mongoose;
};
