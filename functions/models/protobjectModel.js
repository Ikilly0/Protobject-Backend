const admin = require('firebase-admin');
const db = admin.firestore();

// Función para obtener todos los protobjects
const getAllProtobjects = async () => {
  const snapshot = await db.collection('protobjects').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para agregar un nuevo protobject
const addProtobject = async (protobjectData) => {
  const docRef = await db.collection('protobjects').add(protobjectData);
  return { id: docRef.id, ...protobjectData };
};

// Exportar las funciones del modelo
module.exports = {
  getAllProtobjects,
  addProtobject,
};