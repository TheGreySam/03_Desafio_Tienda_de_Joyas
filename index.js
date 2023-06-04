
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

router.get('/joyas', async (req, res) => {
  try {
    const cliente = await pool.connect();
    const result = await cliente.query('SELECT * FROM joyas');
    res.json(result.rows);
    cliente.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error de server interno' });
  }
});

app.use('/api', router);

/* const puerta = 3000;

app.listen(puerta, () => {
  console.log(`Server corriendo en puerto ${puerta}`);
});
 */

app.listen(3000, console.log("Servidor corriendo en puerto 3000"));

app.get("/joyas", (req, res) => {
    res.send("Hola mundo joyas")
})