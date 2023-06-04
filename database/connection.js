//import * as dotenv from "dotenv";
require('dotenv').config();

//dotenv.config();


//import pkg from "pg";
//const { Pool } = require("pg");
//const pkg = { Pool };

const { Pool } = require("pg");
const pool = new Pool({ allowExitOnIdle: true });
module.exports = { pool };


//const { Pool } = pkg;

//console.log(process.env.PGPASSWORD);

//export const pool = new Pool({allowExitOnIdle: true});
//export default pool;