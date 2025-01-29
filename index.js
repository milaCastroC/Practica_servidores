import express from 'express'; 
import bodyParser from 'body-parser'; 

let app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//EJERCICIO 1
app.post('/ejercicio1', function (req, res) {
    let cabecera = req.header("Content-Type");
    let nombre = req.body.nombre; 
    let apellido = req.body.apellido;
    let edad = req.body.edad;

    return res.status(200).json({
        "Status":  "Usuario recibido", 
        cabecera: cabecera,
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }); 

});

//EJERCICIO 2
app.get('/id/:id', function (req, res) {
    let id = req.params.id;
    let categoria = req.query.categoria;
    return res.status(200).json({
        "Status": "Producto consultado",
         id: id,
         categoria: categoria
    });
});

//EJERCICIO 3 
app.post('/descuento', function (req, res) {
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let descuento = req.query.descuento;
    let cabecera = req.header("Content-Type");
    return res.status(200).json({
        "Status": "Producto con descuento",
         cabecera: cabecera,
         nombre: nombre,
         precio: precio,
         stock: stock,
         descuento: descuento
    });

});

//EJERCICIO 4
app.get('/ciudad/:ciudad', function (req, res) {
   let ciudad = req.params.ciudad;
   return res.status(200).json({
    "Status": "Consulta de ciudad",
     ciudad: ciudad
    });
});

//EJERCICIO 5
app.post('/fecha', function (req, res) {
    let nombre = req.body.nombre;
    let habitacion = req.body.habitacion;
    let noches = req.body.noches;
    let cabecera = req.header("Content-Type");
    return res.status(200).json({
        "Status": "Reserva de habitación",
         cabecera: cabecera,
         nombre: nombre,
         habitacion: habitacion,
         noches: noches
    });
});

//EJERCICIO 6
app.get('/autenticacion/:id', function (req, res) { 
    let id = req.params.id;
    let token = req.header("Authorization");

    return res.status(200).json({
        "Status": "Autenticación exitosa",
         id: id,
         token: token
    });
});

//EJERCICIO 7
app.post('/envio', function (req, res) {
   let cabecera = req.header("Content-Type");
   let producto = req.body.producto;
   let cantidad = req.body.cantidad;
   let direccion = req.body.direccion;
   return res.status(200).json({
    "Status": "Envío exitoso",
     cabecera: cabecera,
     producto: producto,
     cantidad: cantidad,
     direccion: direccion
    });
});

//EJERCICIO 8
app.get('/usuario/:usuario', function (req, res) {
    let usuario = req.params.usuario;
    let rol = req.query.rol;
    return res.status(200).json({
        "Status": "Consulta de usuario",
         usuario: usuario,
         rol: rol
    });
});

//EJERCICIO 9
app.post('/evento', function (req, res) {
    let cabecera = req.header("Content-Type");
    let tipoEvento = req.header("X-Event-Type");
    let nombre = req.body.nombre;
    let fecha = req.body.fecha;
    let lugar = req.body.lugar;
    return res.status(200).json({
        "Status": "Evento registrado",
         cabecera: cabecera,
         tipoEvento: tipoEvento,
         nombre: nombre,
         fecha: fecha,
         lugar: lugar
    });
});

//EJERCICIO 10
app.get('/libro/:libro', function (req, res) {
    let libro = req.params.libro;
    return res.status(200).json({
        "Status": "Consulta de libro",
         libro: libro,
    });
});

app.listen(10101, function () { 
    console.log('Example app listening on port 10101!'); 
});