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
app.use(cors());
app.use(express.json());
app.use("/api/products",productsController);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../client/public/upload')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+file.originalname);
    }
  })
const upload=multer({storage});
app.post('/api/upload',upload.single('file'), (req,res)=>{
    const file=req.file;
    res.status(200).json(file.filename);
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname+"/public")));



app.listen(process.env.MYSQLPORT||5000,()=>{
    console.log("Connected");
})
