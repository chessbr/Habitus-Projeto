const Usuario = require('../models/Usuario');

module.exports = {
    async index(req,res){
        const {email_usuario,senha_usuario} = req.params;
        
        const usuario = await Usuario.findOne({
            where: {email_usuario}
        });
        
        if(senha_usuario === usuario.senha_usuario){
            return res.json(usuario);
        } else {
            return res.status(400).json({error: 'Senha incorreta'});
        };
        
    },

};