import mongoose from "mongoose";

export const mongooDbConnect = () => {
  mongoose
    .connect("mongodb://admin:password@localhost:27017", {
      dbName: "car_be",
    })
    .then(() =>
      console.log(
        "****************\n\n Connected to the MONGODB database \n\n****************"
      )
    )
    .catch((err) => console.log(`Error: ${err}`));

  return mongoose;
};
