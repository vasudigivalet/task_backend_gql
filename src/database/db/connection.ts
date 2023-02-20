import dotenv from "dotenv";
import mongoose from "mongoose";

// import DATABASE from "../../config.json";

dotenv.config({ path: './.env' });
const DB = process.env.DATABASE;
mongoose.set('strictQuery', true);
mongoose
  .connect(DB!)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err: Error) => console.log('no connection', err));
