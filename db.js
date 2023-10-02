import dotenv from "dotenv";
dotenv.config();
import mysql from 'mysql2/promise'


// const urlDB=`mysql://root:ujPnYNTdAu1vtlSghcM1@containers-us-west-167.railway.app:8071/railway`
const urlDB=`mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`

export const db=mysql.createPool(urlDB
    // {
    //     host:'localhost',
    //     database: 'dbproducts',
    //     user: 'root',
    //     password:'successful305',
    // }
);
// export const db=mysql.createConnection(urlDB
// //     {
// //     host:process.env.MYSQLHOST,
// //     // port:5000,
// //     user:process.env.MYSQLUSER,
// //     password:process.env.MYSQLPASSWORD,
// //     database:process.env.MYSQLDATABASE
// // }
// );
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });