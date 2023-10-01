import express from "express"
import productsController from "./controllers/products.js"
import cors from 'cors'
import { db } from "./db.js";
import dotenv from "dotenv"

const app= express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/products",productsController);

app.get('/' , (req,res) => {
  res.send('hey Tarek Elassady!')
})

app.listen(process.env.MYSQLPORT,()=>{
    console.log("Connected to ");
})
