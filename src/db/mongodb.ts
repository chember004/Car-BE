import mongoose from "mongoose";

export const mongooDbConnect = () => {
  mongoose //192.168.1.18 test
    .connect("mongodb://admin:password@192.168.1.18:27017/", {
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
