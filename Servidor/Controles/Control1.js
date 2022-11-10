//Es necesario importar el modelo con el cual se va a estar trabajando y cada modelo tiene un controlador
//Un control es un archivo donde realizaremos todas las acciones para manipular el modelo, dicho de otra forma dar una estructura para poder manipular los datos
const Modelo = require('../Modelos/Modelo1');

function DatosNuevos(user, id, control)
{
    const newData = new Modelo({
        user,
        id,
        control
    })
    return newData.save();
}

function InicioSesion(username, password)
{
    const inicio = new Modelo({
        username,
        password
    })
    return inicio.save();
}

function CrearUsuario(username, password, type)
{
    const newUser = new Modelo({
        username,
        password,
        type
    })
    return newUser.save(); 
}

function ObtenerUsuario(id)
{
    return Modelo.findOne({id});
}

function ObtenerUsuarios()
{
    return Modelo.find();
}

module.exports ={DatosNuevos, InicioSesion, CrearUsuario, ObtenerUsuario, ObtenerUsuarios};