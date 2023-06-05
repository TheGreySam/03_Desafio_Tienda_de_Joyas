require('dotenv').config();

const { Pool } = require("pg");
const pool = new Pool({ allowExitOnIdle: true });
module.exports = pool;

//console.log(process.env.PGPASSWORD);
