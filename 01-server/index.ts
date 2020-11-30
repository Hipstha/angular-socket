import Server from './classes/server';
import { router } from './routes/router';
import cors from 'cors';

import bodyParser from 'body-parser';

const server = new Server();

// body parser
server.app.use( bodyParser.urlencoded({ extended: true}) );
server.app.use( bodyParser.json() );

// ruteas de servicios
server.app.use('/', router)

//cors
server.app.use( cors({
  origin: true,
  credentials: true
}));

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${ server.port }`);
});

