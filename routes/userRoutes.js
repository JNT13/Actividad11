const express = require('express');
const UserController = require('../controllers/UserController');

const api = express.Router();

api.get('/saludar', (req, res) => {
console.log('Bienvenido');

});

api.post('/', UserController.create); 
api.put('/:idUser', UserController.update);
api.delete('/:idUser', UserController.remove);
api.get('/allUser/:brand', UserController.getAllUsers);


module.exports = api; 