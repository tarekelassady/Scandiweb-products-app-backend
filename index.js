import express from "express"
import productsController from "./controllers/products.js"
import cors from 'cors'
import { db } from "./db.js";
import dotenv from "dotenv"

const app= express();
dotenv.config();
// app.use(cors());

app.get('/' , (req,res) => {
  res.send('hey Tarekddafdasf3234!')
})

// app.use(express.json());
// app.use("/api/products",productsController);


const PORT=4000
app.listen(process.env.MYSQLPORT,()=>{
    console.log("Connected to ");
})
