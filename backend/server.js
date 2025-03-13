import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows you parse body of requests
app.use(cookieParser());    //allows you parse cookies
app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log("server is running on http://localhost:" + PORT);

    connectDB();
}); 