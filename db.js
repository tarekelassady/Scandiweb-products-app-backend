import mysql from 'mysql'

const urlDB=`mysql://root:Mx2Tb7YFP2ndln3Foglp@containers-us-west-191.railway.app:7795/railway`
export const db=mysql.createConnection(urlDB);