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

//EJERCICIO 11
app.post('/departamento', function (req, res) {
    let departamento = req.query.departamento;
    let cabecera = req.header("Content-Type");
    let nombre = req.body.nombre;
    let puesto = req.body.puesto;
    let salario = req.body.salario;
    return res.status(200).json({
        "Status": "Registro de empleado",
         cabecera: cabecera,
         departamento: departamento,
         nombre: nombre,
         puesto: puesto,
         salario: salario
    });
});

//EJERCICIO 12
app.get('/vehiculo/:vehiculo', function (req, res) {
    let vehiculo = req.params.vehiculo;
    let color = req.query.color;
    return res.status(200).json({
        "Status": "Consulta de vehículo",
         vehiculo: vehiculo,
         color: color
    });
});

//EJERCICIO 13
app.post('/compra', function (req, res) {
    let cabecera = req.header("Content-Type");
    let idCliente = req.header("X-Client-ID");
    let numero = req.body.numero;
    let monto = req.body.monto;
    let fecha = req.body.fecha;
    return res.status(200).json({
        "Status": "Compra realizada",
         cabecera: cabecera,
         idCliente: idCliente,
         numero: numero,
         monto: monto,
         fecha: fecha
    });
});

//EJERCICIO 14
app.get('/pelicula/:pelicula', function (req, res) {
    let pelicula = req.params.pelicula;
    return res.status(200).json({
        "Status": "Consulta de película",
         pelicula: pelicula
    });
});

//EJERCICIO 15
app.post('/clase', function (req, res) {
    let clase = req.query.clase;
    let cabecera = req.header("Content-Type");
    let numero_vuelo = req.body.numero_vuelo;
    let origen = req.body.origen;
    let destino = req.body.destino;
    return res.status(200).json({
        "Status": "Reserva de vuelo",
         cabecera: cabecera,
         clase: clase,
         numero_vuelo: numero_vuelo,
         origen: origen,
         destino: destino
    });
});

//EJERCICIO 16
app.get('/suscripcion/:suscripcion', function (req, res) {
    let suscripcion = req.params.suscripcion;
    let idUsuario = req.header("X-User-ID");
    return res.status(200).json({
        "Status": "Consulta de suscripción",
         suscripcion: suscripcion,
         idUsuario: idUsuario
    });
});

//EJERCICIO 17
app.post('/moneda', function (req, res) {
    let cabecera = req.header("Content-Type");
    let monto = req.body.monto;
    let fecha = req.body.fecha;
    let destinatario = req.body.destinatario;
    return res.status(200).json({
        "Status": "Consignacion realizada",
        cabecera: cabecera,
        monto: monto,
        fecha: fecha,
        destinatario: destinatario
    });
});

//EJERCICIO 18
app.get('/ticket/:ticket', function (req, res) {
    let ticket = req.params.ticket;
    return res.status(200).json({
        "Status": "Consulta de ticket",
         ticket: ticket,
    });
});

//EJERCICIO 19
app.post('/libreria', function (req, res) {
    let cabecera = req.header("Content-Type");
    let idLibreria = req.header("X-Library-ID");
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let año = req.body.año;
    return res.status(200).json({
        "Status": "Compra de libro",
         cabecera: cabecera,
         idLibreria: idLibreria,
         titulo: titulo,
         autor: autor,
         año: año
    });
});

//EJERCICIO 20
app.get('/evento/:evento', function (req, res) {
    let evento = req.params.evento;
    let fecha = req.query.fecha;
    return res.status(200).json({
        "Status": "Consulta de evento",
         evento: evento,
         fecha: fecha
    });
});

app.listen(10101, function () { 
    console.log('Example app listening on port 10101!'); 
});