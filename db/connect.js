import mongoose from "mongoose";

const connectDB = () => {
  const dbUri = "mongodb://localhost:27017/superQl";

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { connectDB };
