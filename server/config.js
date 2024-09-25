import dotenv from "dotenv";
dotenv.config();

export const mongoUrl = process.env.MONGO_URL;
export const PORT = process.env.PORT || 5000;
