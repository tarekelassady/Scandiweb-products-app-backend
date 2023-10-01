import dotenv from "dotenv";
dotenv.config();
import mysql from 'mysql2'

// const urlDB=`mysql://root:Mx2Tb7YFP2ndln3Foglp@containers-us-west-191.railway.app:7795/railway`
const urlDB=`mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`
export const db=mysql.createConnection(urlDB
//     {
//     host:process.env.MYSQLHOST,
//     // port:5000,
//     user:process.env.MYSQLUSER,
//     password:process.env.MYSQLPASSWORD,
//     database:process.env.MYSQLDATABASE
// }
);
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });