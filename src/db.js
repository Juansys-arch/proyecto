import pkg from "pg" ;

const { Pool } = pkg;

const pool = new Pool ({
    user: "postgres",
    host:"localhost",
    database: "proga clase 7",
    password: "juan",
    port:5432
});
export default pool;

