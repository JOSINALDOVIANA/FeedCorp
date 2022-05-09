import  express  from  'express';
import knex from 'knex';
// import ControllerProprietario from './controller/controllerProprietarios.js';
// import ControllerLojas from'./controller/controlerLojas.js';
// import ControllerCriticas from'./controller/controllerCriticas.js';
// import ControllerCategorias from'./controller/controllerCategorias.js';
// import multerconfig from'./config/multer.js';
// import multer  from'multer';
// import ContollerFotos from'./controller/contollerFotos.js';
// import feedback from './controller/feedbacks.js';
// import JsonTController from './controller/ControllerJsonT.js';
// import executar from './controller/executar.js';
// import ControlerJosinaldo from './controller/josinaldo/controllerJosinaldo.js';
const conexao= knex({
    client: 'mysql',
    connection: {
     
      user : 'root',
      password : '',
      database : 'avdenterprise'
    }
  });
const routes=express.Router();


routes.get('/login',async (req,res,next)=>{
try {
  let users = await conexao("users").select("users.*").where("email","josinaldo@gmail.com").first();
  // var permisao=[]
  //    users.forEach(async (user,index)=>{
  //     permisao.push(await conexao("permisao").join("cat_per","permisao.idpermisao","=","cat_per.per_id").where("cat_per.cat_id",user.categoria)
  //    .select("permisao.descri"));        
  // })
   console.log(users)
  res.json({mensagem:"funcionando"})
} catch (error) {
  next(error)
}
   
})
 




export default routes;