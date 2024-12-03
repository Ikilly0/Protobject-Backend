const express = require('express');
const router = express.Router();


const { handleArucoData } = require('../controllers/protobjectController'); 
// Define tus rutas aquí
router.post('/savearuco', handleArucoData);

router.get('/', (req, res) => {
    
    res.send('nothing to get here ... :3');
  });

module.exports = router;
