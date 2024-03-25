import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "216.137.180.170",
  user: "shubhamk_mash",
  password: "Mashreq@@@3034",
  database: "shubhamk_mashreq",
});

export async function getPool() {
  return pool;
}
