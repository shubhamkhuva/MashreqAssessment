import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "sql.freedb.tech",
  user: "freedb_shubhamk_mash",
  password: "U7MA&9yzGZ%A*$c",
  database: "freedb_shubhamk_mash",
});

export async function getPool() {
  return pool;
}
