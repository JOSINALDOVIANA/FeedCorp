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
const routes=express.Router();

 /*
 obs_01: tabela "string_string" não precisão de rotas delete
 pois elas são tabelas de relacionamento e uma vez excluido o id da tabela origem
 o cascateamento tambem apaga o registro nelas.
 
*/


/*################################################ USUARIO ########################################*/

routes.post('/user/login',user.login);//obs:get nao recebe dados via body do navegador
routes.post('/user/insert',user.insert);//cria usuario na tabela "users"
routes.put('/user/update',user.update); // so atualiza dados na tabela "users", nao envolve outras tabelas
routes.delete('/user/delete',user.delete);//deleta usuario na tabela "users"

                      /*------rotas especiais------*/





routes.put('/user/update/user_ebr',user.updateUser_ebr); // atualiza em "user_ebr"
routes.post('/user/insert/user_ebr',user.insertUser_ebr); // inserir dados em "user_ebr"
routes.get('/user/get/user_ebr',user.getUser_ebr); // retona qual avaliação por resultado existe para o usuario"

routes.post('/user/insert/user_unit',user.insertUser_unit); // inserir dados  em "user_unit"
routes.put('/user/update/user_unit',user.updateUser_unit); // atualiza em "user_unit"
routes.get('/user/get/user_unit',user.getUser_unit); // retorna qual unidade do usuario
/*################################################################################################*/


/*################################################ UNIDADES ######################################*/

//cria unidades na tabela "units"
routes.post("/unit/create",unidades.create);
//deleta uma unidade na tabela "units"
routes.delete("/unit/delete",unidades.delete);
//atualiza uma unidade na tabela "units"
routes.put("/unit/update",unidades.update);
//redireciona e retorna qual a unidade do  usuario
routes.get("/unit/get/user_unit",(req,res)=>{
    res.redirect(`http://localhost:${process.env.PORT}/user/get/user_unit?id_user=${req.query.id_user}`);
});

                               /*------rotas especiais------*/

// consulta quais unidades o usuario criou tambem ja devolve quantos e quais colaboradores tem na unidade
// a unidade do usuario  ja é carregada no login no objeto:unit
//se os parametros exigidos nao existirem retona todas as unidades cadastradas sem parametros de filtro
routes.get("/unit/consult",unidades.getUnitCreateUser);



/*###################################################################################################*/






/*################################################ PERMISSIONS ######################################*/

routes.post("/permission/create",permissoes.create)//criar
routes.put("/permission/update",permissoes.update)//atualizar
routes.delete("/permission/delete",permissoes.delete)//deletar
routes.get("/permission/get",permissoes.get)//devolve as permissoes por user se "id_user" nao existir retorna todas


/*###################################################################################################*/



/*################################################ AV. POR RESULTADOS ######################################*/
routes.post("/avpr/insert",avpr.insert);//cria na tabela "evaluation_by_results"
routes.put("/avpr/update",avpr.update);//atualiza  a tabela "evaluation_by_results" exige "id"
routes.put("/avpr/delete",avpr.delete);//exclui na tabela "evaluation_by_results" exige "id"
routes.put("/avpr/getone",avpr.getEspecific);//retorna uma avaliação especifica exige o "id" da avaliação
routes.put("/avpr/gettwu",avpr.getCreateAll);//retorna todas as avaliações criadas pelo usuario exige "id_user"


                                             /*------rotas especiais------*/

routes.post("/avpr/insert/items",avpr.insertItems)// inserir valores na tabela "items"
routes.put("/avpr/update/items",avpr.updateItems)// atualiza valores na tabela "items"
routes.get("/avpr/get/items",avpr.getItems)// busca o items de cada avaliação exige "id_ebr"

routes.post("/avpr/insert/resposta",avpr.insertItems)// inserir valores na tabela "items"


/*#########################################################################################################*/




/*################################################ IMAGES ######################################*/
routes.post('/images/salvar', multer(multerconfig).single('file'),images.salvar);
routes.delete('/images/deletar',images.deletar);
routes.get("/images/listar",images.listar)
/*#########################################################################################################*/

/*################################################ company ######################################*/
routes.post('/company/insert',company.Insert);
routes.delete('/company/delete',company.Delete);
routes.get("/company/get",company.Get);
routes.put("/company/update",company.Update);
/*#########################################################################################################*/



/*################################################ planos e modulos######################################*/
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

export default routes;