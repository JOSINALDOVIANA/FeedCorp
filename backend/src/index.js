import 'dotenv/config.js';

import express from 'express';
import cors from 'cors';
import routes from './routes.js';
const App = express();


// App.use(cors({ exposedHeaders: ['Total_lojas_cliente', 'Total_categorias',
//  'Total_criticas_loja', 'Total_categorias','login','update_prop','login_loja','FeedbackTotais','sugestoesTotais',
// 'PNETotais'] }));


App.use(express.json());
// App.use('/files',express.static(path.resolve(__dirname,'..','tmp','uploads')))
App.use(routes);
// App.use((req,res,next)=>{
//     const error = new Error('você esta tentando acessar um recurso inexistente.');
//     error.status=404;
//     next(error);
// });
App.use((error, req, res, next) => {
    console.log(error.code);
    res.status("500");
    return res;
    
});

//////////////
//git add *
//git commit -m "mensagem"
//git push
//////////////

var port = process.env.PORT || 3002;

App.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`);
});
