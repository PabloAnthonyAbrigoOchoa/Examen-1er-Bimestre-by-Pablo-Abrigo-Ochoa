const http = require('http');
const colors = require('colors');//para darle color a mi proyecto
const express = require('express');
const path = require('path'); //se encargara de trabajar con las rutas y unir directorios
const server = express();

//initializations
const app = express();//aqui inicializamos y lo almacenamos en nuestra constante app
/*const db = require('.routes/database');*/


//settings
app.set('port', process.env.PORT || 5000);


//static files
app.use(express.static(path.join(__dirname + '/public')));


//start the server
const server1 = app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});

//websockets
const SocketIo = require('socket.io');
const io = SocketIo();

io.on('connection', (socket) =>{
    console.log('new conecction', socket.id);
});








/*
server.get('/', function (req, res){
	res.send('<h1>Examen 1er Bimestre</h1>');
    res.send('<h1>by Pablo Abrigo-Ochoa</h1>');
	res.end();
})
server.listen(5000, function(){
	console.log('Server on port 5000'.red);
});
*/