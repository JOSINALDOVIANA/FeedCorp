import  express  from  'express';
import avpr from "./controller/evaluation_by_results/index.js"
import user from "./controller/usuarios/index.js";
import unidades from './controller/unidades/index.js';
import permissoes from './controller/permissoes/index.js';
import multer from 'multer';
import multerconfig from "./config/multer.js";
import images from "./controller/images/imagecontrol.js";
import company from './controller/company/index.js';
import plans from './controller/plans/index.js';
import physicalUnity from './controller/physicalUnity/index.js';
import location from './controller/location/index.js';
import okr from './controller/okr/index.js';
import feedbacks from './controller/feedbacks/index.js';
import questions from './controller/questions/index.js';
import pulses from './controller/pulses/index.js';
import cargos from "./controller/cargo/index.js"
import  Knex  from "knex"
import contact from './controller/contact/index.js';
const routes=express.Router();

 /*
 obs_01: tabela "string_string" não precisão de rotas delete
 pois elas são tabelas de relacionamento e uma vez excluido o id da tabela origem
 o cascateamento tambem apaga o registro nelas.
 
*/


/*################################################ USUARIO ########################################*/

routes.post('/user/login',user.login);//obs:get nao recebe dados via body do navegador
routes.post('/user/insert',user.insert);//cria usuario na tabela "users"
routes.get('/user/getAll',user.GetAll);//retorna todos os usuarios
routes.put('/user/update',user.update); // so atualiza dados na tabela "users", nao envolve outras tabelas
routes.delete('/user/delete',user.delete);//deleta usuario na tabela "users"

// ----------user_ebr---------------
routes.put('/user_ebr/update',user.updateUser_ebr); // atualiza em "user_ebr"
routes.post('/user_ebr/insert',user.insertUser_ebr); // inserir dados em "user_ebr"
routes.get('/user_ebr/get',user.getUser_ebr); // retona qual avaliação por resultado existe para o usuario"

// --------------user_unit-------------------
routes.post('/user_unit/insert',user.insertUser_unit); // inserir dados  em "user_unit"
routes.put('/user_unit/update',user.updateUser_unit); // atualiza em "user_unit"
routes.get('/user_unit/get',user.getUser_unit); // retorna qual unidade do usuario
/*################################################################################################*/


/*################################################ UNIDADES ######################################*/

// -------unit---------
routes.post("/unit/insert",unidades.Insert);//cria unidades na tabela "units"
routes.delete("/unit/delete",unidades.delete);//deleta uma unidade na tabela "units"
routes.put("/unit/update",unidades.update);//atualiza uma unidade na tabela "units"
// consulta quais unidades o usuario criou tambem ja devolve quantos e quais colaboradores tem na unidade
// a unidade do usuario  ja é carregada no login no objeto:unit
//se os parametros exigidos nao existirem retona todas as unidades cadastradas sem parametros de filtro
routes.get("/unit/consult",unidades.getUnitCreateUser);
routes.get("/unit/getAll",unidades.getAll); // retorna todas as unidades que existe

// ------physicalUnity-----

/*###################################################################################################*/

routes.post("/physicalUnity/insert",physicalUnity.insert)
routes.get("/physicalUnity/get",physicalUnity.get)
routes.delete("/physicalUnity/delete",physicalUnity.delete)
routes.put("/physicalUnity/update",physicalUnity.update)




/*################################################ PERMISSIONS ######################################*/

routes.post("/permission/insert",permissoes.create)//criar
routes.put("/permission/update",permissoes.update)//atualizar
routes.delete("/permission/delete",permissoes.delete)//deletar
routes.get("/permission/get",permissoes.get)//devolve as permissoes por user se "id_user" nao existir retorna todas


/*###################################################################################################*/



/*################################################ AV. POR RESULTADOS ######################################*/
// ------evaluation_by_results----
routes.post("/avpr/insert",avpr.insert);//cria na tabela "evaluation_by_results"
routes.put("/avpr/update",avpr.update);//atualiza  a tabela "evaluation_by_results" exige "id"
routes.delete("/avpr/delete",avpr.delete);//exclui na tabela "evaluation_by_results" exige "id"
routes.get("/avpr/getone",avpr.getEspecific);//retorna uma avaliação especifica juntamente com as respostas e usuarios que reponderam, exige o "id" da avaliação
routes.get("/avpr/gettwu",avpr.getCreateAll);//retorna todas as avaliações criadas pelo usuario exige "id_user"
routes.get("/avpr/getAll",avpr.getAll);//retorna todas as avaliações 

// ------items-------
routes.post("/items/insert",avpr.insertItems)// inserir valores na tabela "items"
routes.put("/items/update",avpr.updateItems)// atualiza valores na tabela "items"
routes.get("/items/get",avpr.getItems)// busca os items de cada avaliação exige "id_ebr"
routes.get("/items/delete",avpr.deleteItems)// apaga um items


// ------item_answer_user-----
routes.post("/item_answer_user/insert",avpr.insertItem_Answer_User)// inserir valores na tabela "item_answer_user"
routes.put("/item_answer_user/update",avpr.updateItem_Answer_User)// atualiza valores na tabela "item_answer_user", exige id
routes.get("/item_answer_user/get",avpr.getItem_Answer_User)// busca valores na tabela "item_answer_user" exigencias descrita abaixo                                                               
routes.delete("/item_answer_user/delete",avpr.deleteItem_Answer_User)// deleta uma resposta na tabela "item_answer_user", exige "id"
/*#########################################################################################################*/




/*################################################ IMAGES ######################################*/
routes.post('/images/salvar', multer(multerconfig).single('file'),images.salvar);
routes.delete('/images/deletar',images.deletar);
routes.get("/images/listar",images.listar)
/*#########################################################################################################*/




/*################################################ company, planos e modulos######################################*/
// ----company-----
routes.post('/company/insert',company.Insert);
routes.delete('/company/delete',company.Delete);
routes.get("/company/get",company.Get);
routes.put("/company/update",company.Update);

// ----modules----
routes.post('/module/insert',plans.ModuleInsert);
routes.delete('/module/delete',plans.ModuleDelete);
routes.get('/module/get',plans.ModuleGet);
routes.put('/module/update',plans.ModuleUpdate);
routes.get('/module/getAll',plans.ModuleGetAll);

// ----plans----
routes.post('/plans/insert',plans.PlansInsert);
routes.delete('/plans/delete',plans.PlansDelete);
routes.get('/plans/get',plans.PlansGet);
routes.get('/plans/getAll',plans.PlansGetAll);
routes.put('/plans/update',plans.PlansUpdate);

// ----plan_modules----
routes.post('/plan_module/insert',plans.Plan_ModuleInsert);
routes.delete('/plan_module/delete',plans.Plan_ModuleDelete);
routes.get('/plan_module/get',plans.Plan_ModuleGet);
routes.put('/plan_module/update',plans.Plan_ModuleUpdate);

// ----company_module----
routes.post('/company_module/insert',plans.Company_ModuleInsert);
routes.delete('/company_module/delete',plans.Company_ModuleDelete);
routes.get('/company_module/get',plans.Company_ModuleGet);
routes.put('/company_module/update',plans.Company_ModuleUpdate);

/*#########################################################################################################*/


/*################################################ localização######################################*/
// ----- country -----
routes.post("/country/insert",location.insertCountry)
routes.delete("/country/delete",location.deleteCountry)
routes.put("/country/update",location.updateCountry)
routes.get("/country/get",location.getCountry)
// ----- state -----
routes.post("/state/insert",location.insertState)
routes.delete("/state/delete",location.deleteState)
routes.put("/state/update",location.updateState)
routes.get("/state/get",location.getState)
// ----- city -----
routes.post("/city/insert",location.insertCity)
routes.delete("/city/delete",location.deleteCity)
routes.put("/city/update",location.updateCity)
routes.get("/city/get",location.getCity)
/*#########################################################################################################*/

/*################################################OKRS,keys######################################*/
// ----okrs----
routes.post("/okrs/insert",okr.Insert)
routes.put("/okrs/update",okr.update)
routes.get("/okrs/getOne",okr.getOne)// exige "id" se nao houver id retorna todos os okrs cadastrados, com id trara keys e responsaveis por eles
routes.get("/okrs/getTwu",okr.getTwu)// exige "id_user" todos os okrs cadastrados por este usuario 
routes.delete("/okrs/delete",okr.delete)
//-------keys-------
routes.post("/keys/insert",okr.keysInsert)
routes.put("/keys/update",okr.keysupdate)
routes.get("/keys/getOne",okr.keysgetOne)// exige "id" se nao houver id retorna todos os keys cadastrados, com id trara keys e responsaveis por eles
routes.get("/keys/getTwu",okr.keysgetTwu)// exige "id_user" todos os keys cadastrados por este usuario 
routes.delete("/keys/delete",okr.keysdelete)

/*#########################################################################################################*/

/*################################################feedbacks######################################*/
// ------feedbacks-----
routes.post("/feedback/insert",feedbacks.insert);
routes.put("/feedback/update",feedbacks.update);
routes.get("/feedback/get",feedbacks.get);
routes.delete("/feedback/delete",feedbacks.delete);

// -------typesfeedbacks----
routes.post("/typesfeedbacks/insert",feedbacks.typesInsert);
routes.get("/typesfeedbacks/get",feedbacks.typesGet);
routes.put("/typesfeedbacks/update",feedbacks.typesUpdate);
routes.delete("/typesfeedbacks/delete",feedbacks.typesDelete);

// ----answers----
routes.post('/answers/insert',feedbacks.answersInsert);
routes.get('/answers/get',feedbacks.answersGet);
routes.put('/answers/update',feedbacks.answersUpdate);
routes.delete('/answers/delete',feedbacks.answersDelete);

// ----feedbacks_answer-----
routes.post("/feedback_answer/insert",feedbacks.FA_Insert);
routes.get("/feedback_answer/get",feedbacks.FA_Get);
routes.put("/feedback_answer/update",feedbacks.FA_Update);
routes.delete("/feedback_answer/delete",feedbacks.FA_Delete);



/*#########################################################################################################*/

/*################################################ pulse ######################################*/
// ------Pulses-----
routes.post("/pulses/insert",pulses.Insert);
// routes.put("/pulses/update",pulses.update);
routes.get("/pulses/get",pulses.Get);
routes.delete("/pulses/delete",pulses.Delete);

// ------pulse_question-----
// routes.post("/pulses/insert",pulses.insert);
// routes.put("/pulses/update",pulses.update);
// routes.get("/pulses/get",pulses.get);
// routes.delete("/pulses/delete",pulses.delete);

// ------pulse_unity-----
// routes.post("/pulses/insert",pulses.insert);
// routes.put("/pulses/update",pulses.update);
// routes.get("/pulses/get",pulses.get);
// routes.delete("/pulses/delete",pulses.delete);

// ------pulse_user-----
// routes.post("/pulses/insert",pulses.insert);
// routes.put("/pulses/update",pulses.update);
// routes.get("/pulses/get",pulses.get);
// routes.delete("/pulses/delete",pulses.delete);

// ------pulse_company-----
// routes.post("/pulses/insert",pulses.insert);
// routes.put("/pulses/update",pulses.update);
// routes.get("/pulses/get",pulses.get);
// routes.delete("/pulses/delete",pulses.delete);

// ------answer_user-----
routes.post("/pulses/answer_user/insert",pulses.answer_userInsert);
routes.put("/pulses/answer_user/update",pulses.answer_userUpdate);


// ------BDQuestion-----
routes.post("/pulses/questions/insert",questions.Insert);
routes.put("/pulses/questions/update",questions.Update);
routes.get("/pulses/questions/get",questions.Get);
routes.delete("/pulses/questions/delete",questions.Delete);

//---------category_question------
routes.post("/questions/category_question/insert",questions.categoryQuestionInsert);
routes.get("/questions/category_question/get",questions.categoryQuestionGet);


//---------Cargos------
routes.post("/cargos/insert",cargos.Insert);
routes.get("/cargos/get",cargos.select);
routes.delete("/cargos/del",cargos.del);
routes.put("/cargos/update",cargos.update);

// routes.post("/raw",async(req,res)=>{
// const {user,password,database,sql,table}=req.body;
// const conectBD=Knex({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       port : 3306,
//       user ,
//       password,
//       database 
//     }
//   })
// return res.json({dados:await conectBD.raw(sql)})
// })
// exemplo de uso no html dentro da pasta logs

// -----------------contact--------------
routes.post("/contact",contact.Insert);
routes.get("/contact",contact.Select);


export default routes;