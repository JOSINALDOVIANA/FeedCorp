import 'dotenv/config.js';
import path from "path"
import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import morganBody from 'morgan-body';
import fs from "fs";
import moment from 'moment';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const log = fs.createWriteStream(
    path.resolve(__dirname,'./logs',`express-${moment().format("YYYY-MM-DD")}.log`),{flags:"a"}
)

const App = express();
App.use(function (req, res, next) {
   // console.log('Time:', Date.now());
    next();
  });
App.use(express.json());
App.use(cors());
morganBody(App,{noColors:true,stream:log})
App.use('/files',express.static(path.resolve(__dirname,'..','tmp','uploads')))

// App.use(cors({ exposedHeaders: ['Total_lojas_cliente', 'Total_categorias',
//  'Total_criticas_loja', 'Total_categorias','login','update_prop','login_loja','FeedbackTotais','sugestoesTotais',
// 'PNETotais'] }));


App.use(routes);
// App.use((req,res,next)=>{
//     const error = new Error('você esta tentando acessar um recurso inexistente.');
//     error.status=404;
//     next(error);
// });
// App.use((error, req, res, next) => {
//     console.log(error.code);
//     res.status("500");
//     return res;
    
// });

//////////////
//git add *
//git commit -m "mensagem"
//git push
//////////////

var port = process.env.PORT || 3002;

App.listen(port, () => {
    //console.log(`servidor rodando na porta: ${port}`);
});
