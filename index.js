require('dotenv').config();

const express = require("express");
//const pool = require("./database/connection.js").default;
const { Pool } = require('pg');

const app = express()

const pool = new Pool({
    //connectionString: process.env.PGDATABASE_URL,
    allowExitOnIdle: true
});
console.log(pool)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto 3000"));


app.get("/joyas", async (req, res) => {
    try {
        const query = 'SELECT * FROM inventario';
        const response = await pool.query(query);
        res.json(response.rows)
        //res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error de server interno' });
    }
    
});
