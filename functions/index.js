const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const protobjectRoutes = require('./routes/protobjectRoutes');
// Inicializar Express
const app = express();
app.use(cors());
app.use(express.json());

app.use('/protobjects', protobjectRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a InfoVis Protobject API');
});

// Rutas adicionales

// Exportar la función
exports.api = functions.https.onRequest(app);