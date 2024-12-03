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



//funcion establecer collection
const initializeFirestore = async () => {
    try {
        // Guardar datos en Firestore
        await db.collection('arucoData').doc('123').set({
            position: { x: 0.6, y: 0.4 },
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log('Documento creado en Firestore');
    } catch (error) {
        console.error('Error al inicializar Firestore:', error);
    }
};


// Exportar la función
exports.api = functions.https.onRequest(app);