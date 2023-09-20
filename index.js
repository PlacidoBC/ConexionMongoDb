const app = require('./app'); //creamos un protocolo de transferencia
const http = require('http');
const server = http.createServer(app);

server.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})