require('dotenv').config();

const express = require("express");
//import pool from "./database/connection.js";
const pool = require("./database/connection.js").default;
console.log(pool)

const app = express()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto 3000"));


app.get("/joyas", async (req, res) => {
    try {
        const query = 'SELECT * FROM inventario';
        const response = await pool.query(query);
        res.json(response)
        //res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error de server interno' });
    }
    
});
