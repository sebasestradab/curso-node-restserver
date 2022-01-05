const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async (rol = '') => {
	const existeRol = await Role.findOne({rol});
	if(!existeRol){
		throw new Error(`El rol ${rol} no esta registrado en la BD`);
	}
}

const esEmailValido = async (correo = '') => {
	const existeEmail = await Usuario.findOne({correo});
	if(existeEmail) {
		throw new Error(`El correo: ${correo} ya esta registrado`);
	}
}

module.exports = {
	esRolValido,
	esEmailValido
}