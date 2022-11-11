const express = require('express');
//Como vamos a hacer uso de rutas necesitamos crear esta constante
const route = express.Router();
//Importamos las funciones del controlador
const{DatosNuevos, InicioSesion, CrearUsuario, ObtenerUsuario, ObtenerUsuarios, EliminaUsuario, ObtenGrafica, ObtenGraficas, ObtenDatos} = require('../Controles/Control1');

route.post("/reciveData", (req,res) => {
    let user = req.body.user;
    let id = req.body.id;
    let control = req.body.control;

    if(user && id && control)
    {
        console.log("");
        DatosNuevos(user, id, control)
        .then((data) => {
            console.log("Datos recibidos");
            console.log(data);
            res.status(200).send("Datos recibidos");
        })
        .catch((err) => {
            console.log("No se pudieron recibir los datos");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /reciveData");
    }
});

route.post("/login", (req, res) =>{
    let username = req.body.username;
    let password =req.body.username;

    if(username && password)
    {
        InicioSesion(username, password)
        .then((data) =>{
            console.log("Sesión iniciada");
            console.log(data);
            res.status(200).send("Sesión iniciada");
        })
        .catch((err) => {
            console.log("No se pudo iniciar sesión");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /login");
    }
});

route.post("/CreateUser", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let type = req.body.type;

    if(username && password && type)
    {
        CrearUsuario(username, password, type)
        .then((data) => {
            console.log("Usuario creado con exito");
            console.log(data);
            res.status(200).send("Usuario creado con éxito");
        })
        .catch((err) => {
            console.log("No se pudo crear el usuario");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /CreateUser");
    }
});

route.get("/findOneUser", (req, res) => {
    let id =req.body.id;

    if(id)
    {
        ObtenerUsuario(id)
        .then((data) => {
            console.log("Usuario encontrado");
            console.log(data);
            res.status(200).send("Usuario encontrado");
        })
        .catch((err) => {
            console.log("No se pudo encontrar al usuario");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /findOneUser");
    }
});

route.get("/findAllUsers", (res) => {
    ObtenerUsuarios()
    .then((data) => {
        console.log("Usuarios encontrados");
        console.log(data);
        res.status(200).send("Usuarios");
    })
    .catch((err) => {
        console.log("Error al buscar usuarios");
        console.log(err);
    })
});

route.post("/dropUser", (req,res) => {
    let id = req.body.id;

    if(id)
    {
        EliminaUsuario(id)
        .then((data) => {
            console.log("Usuario eliminado");
            console.log(data);
            res.status(200).send("Usuario Eliminado");
        })
        .catch((err) => {
            console.log("No se pudo eliminar este usuario");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /dropUser");
    }
});

route.get("/getGraphic", (req, res) => {
    let id =req.body.id;

    if(id)
    {
        ObtenGrafica(id)
        .then((data) => {
            console.log("Grafica encontrada");
            console.log(data);
            res.status(200).send("Grafica encontrada");
        })
        .catch((err) => {
            console.log("No se pudo encontrar la grafica");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /getGraphic");
    }
});

route.get("/getAllGraphics", (res) => {
    ObtenGraficas()
    .then((data) => {
        console.log("Graficas encontradas");
        console.log(data);
        res.status(200).send("Usuarios");
    })
    .catch((err) => {
        console.log("Error al buscar graficas");
        console.log(err);
    })
});

route.post("/getData", (req, res) => {
    let id =req.body.id;
    let conjunto = req.body.conjunto;

    if(id && conjunto)
    {
        ObtenDatos(id, conjunto)
        .then((data) => {
            console.log("Datos encontrados");
            console.log(data);
            res.status(200).send("Datos encontrados");
        })
        .catch((err) => {
            console.log("No se pudo encontrar el conjunto de datos");
            console.log(err);
        })
    }else
    {
        console.log("Datos incompletos");
        res.status(400).send("Datos incompletos para la ruta /getData");
    }
});

module.exports = route;