import dotenv from "dotenv";
dotenv.config();
import mysql from 'mysql'

const urlDB="mysql://root:Mx2Tb7YFP2ndln3Foglp@containers-us-west-191.railway.app:7795/railway"
// const urlDB=`mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}/${process.env.MYSQLDATABASE}`
export const db=mysql.createConnection(urlDB
//     {
//     host:process.env.MYSQLHOST,
//     // port:process.env.MYSQLPORT,
//     user:process.env.MYSQLUSER,
//     password:process.env.MYSQLPASSWORD,
//     database:process.env.MYSQLDATABASE
// }
);