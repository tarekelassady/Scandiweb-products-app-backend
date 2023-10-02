import dotenv from "dotenv";
dotenv.config();
import mysql from 'mysql2/promise'

const urlDB=`mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`

export const db=mysql.createPool(urlDB);
