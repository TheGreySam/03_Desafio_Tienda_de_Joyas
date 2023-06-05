require('dotenv').config();

const express = require("express");
//const pool = require("./database/connection.js").default;
const { Pool } = require('pg');

const app = express()

const pool = new Pool({
    //connectionString: process.env.PGDATABASE_URL,
    allowExitOnIdle: true
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto 3000"));


app.get("/joyas", async (req, res) => {
    try {
        const { limit, page, order_by } = req.query;

        let query = 'SELECT * FROM inventario';
        if (limit) {
        const offset = (page - 1) * limit;
        query += ` LIMIT ${limit} OFFSET ${offset}`;
        }
        if (order_by) {
        query += ` ORDER BY ${order_by}`;
        }
        const response = await pool.query(query);
        res.json(response.rows);
        //res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error de server interno' });
    }
});

app.get("/joyas/filtros", async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;

        let query = 'SELECT * FROM inventario';
        if (precio_max) {
        query += `AND precio <= ${precio_max}`;
        }
        if (precio_min) {
            query += `AND precio >= ${precio_min}`;
        }
        if (categoria) {
            query += `AND categoria = '%${categoria}%'`;
        }
        if (metal) {
            query += `AND metal = '%${metal}%'`;
        }
        const response = await pool.query(query);
        res.json(response.rows);
        //res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error de server interno' });
    }
});
