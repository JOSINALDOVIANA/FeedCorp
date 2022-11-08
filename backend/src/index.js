import 'dotenv/config.js';
import path from "path"
import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import morganBody from 'morgan-body';
import fs from "fs";
import moment from 'moment';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const log = fs.createWriteStream(
//   path.resolve(__dirname, './logs', `express-${moment().format("YYYY-MM-DD")}.log`), { flags: "a" }
// )

const App = express();
// App.use(function (req, res, next) {
//   // // console.log('Time:', Date.now());
//   next();
// });
App.use(cors());
// morganBody(App, { noColors: true, stream: log })
App.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
App.use(express.json());
App.use(routes);
App.use("/*", (req, res, next) => {
 return  res.send("<span>você esta tentando acessar um recurso inexistente</span>")
  
});
var port = 3001;
App.listen(port, () => {
  // console.log(`servidor rodando na porta: ${port}`);
});
