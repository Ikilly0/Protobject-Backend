const admin = require('firebase-admin');

// Inicializar Firebase Admin si no está ya inicializado
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: "https://<tu-database>.firebaseio.com",
    });
}

const db = admin.firestore(); // Acceso a Firestore

const handleArucoData = async (req, res) => {
    try {
        const arucoData = req.body;

        
        for (const arucoId in arucoData) {
            const data = arucoData[arucoId];

            // Guarda el documento con el ID proporcionado
            await db.collection('arucoData').doc(arucoId).set({
                ...data,
                timestamp: admin.firestore.FieldValue.serverTimestamp(), // Agrega un timestamp automático
            });
        }

        
        res.status(200).json({ message: 'Datos guardados en Firestore correctamente' });
    } catch (error) {
        console.error('Error al guardar datos en Firestore:', error);
        res.status(500).json({ error: 'Error al guardar los datos' });
    }
};

module.exports = { handleArucoData };
