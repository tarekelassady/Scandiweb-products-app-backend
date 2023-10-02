import express from "express"
import productsController from "./controllers/products.js"
import cors from 'cors'
import { db } from "./db.js";
import dotenv from "dotenv"

const app= express();
dotenv.config();
app.use(cors());
app.use(express.json());

db.query("select * from tblproducts")
.then(()=>{
  console.log("connected to db");
  app.listen(process.env.PORT,()=>{
    console.log("Connected to ");})
}).catch(err => console.log("db connection error \n" + err));

app.use("/api/products",productsController);

app.get('/' , (req,res) => {
  res.send('hey Tarek Elassady!')
})

