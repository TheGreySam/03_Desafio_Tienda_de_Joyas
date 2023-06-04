
/* 
const express = require('express');
const { Pool } = require('pg');

const app = express();

app.use(express.json());

const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432
  });

  const router = express.Router();

// ruta
*/



/*
router.get('/joyas', async (req, res) => {
  try {
    
    const cliente = await pool.connect();
    const result = await cliente.query('SELECT * FROM joyas');
    res.json(result.rows);
    cliente.release(); 
    
   res.json({ok:true})
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error de server interno' });
  }
});

app.use('/api', router);
*/
/*
app.get("/joyas", (req, res) => {
    res.json({ ok: true });
});

import * as dotenv from "dotenv";
dotenv.config();
*/
require('dotenv').config();

const express = require("express");

/*
import express from "express";
*/
const app = express()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto 3000"));


app.get("/joyas", (req, res) => {
    //res.send("Hola mundo joyas");
    res.json({ ok: true });
})
