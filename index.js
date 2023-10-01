import express from "express"
import productsController from "./controllers/products.js"
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';
import { db } from "./db.js";
import dotenv from "dotenv"

const app= express();
dotenv.config();
// app.use(cors());

app.get('/' , (req,res) => {
  res.send('hey Tarek!')
})

// app.use(express.json());
app.use("/api/products",productsController);

app.get('/' , (req,res) => {
  res.send('hey Tarek!')
})



app.listen(process.env.MYSQLPORT||4000,()=>{
    console.log("Connected");
})
