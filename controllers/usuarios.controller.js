const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req, res = response) => {
	const {q, nombre='no name', apikey, page=1, limit} = req.query;
	
	res.json({
		msg: 'get API - Controlador', 
		q,
		nombre,
		apikey,
		page,
		limit
	});
}

const usuariosPost = async (req, res = response) => {
	
	
	const {nombre, correo, password, rol} = req.body;
	const usuario = new Usuario({nombre, correo, password, rol});

	// Verificar si el correo existe
	// const existeEmail = await Usuario.findOne({correo});
	// if(existeEmail) {
	// 	return res.status(400).json({
	// 		msg: 'El correo ya esta registrado'
	// 	});
	// }

	// Encriptar la contraseña
	const salt = bcryptjs.genSaltSync();
	usuario.password = bcryptjs.hashSync(password, salt);

	// Guardr en BD
	await usuario.save();

	res.status(201).json({
		usuario
	});
}

const usuariosPut = (req, res = response) => {
	const id = req.params.id;
	
	res.json({
		msg: 'put API - Controlador',
		id
	});
}

const usuariosDelete = (req, res = response) => {
	res.json({
		msg: 'delete API - Controlador'
	});
}

const usuariosPatch = (req, res = response) => {
	res.json({
		msg: 'patch API - Controlador'
	});
}

module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosDelete,
	usuariosPatch
}