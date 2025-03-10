import express from "express";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000

app.listen(1000, ()=>{
    console.log("server is running on http://localhost:" + PORT)
});