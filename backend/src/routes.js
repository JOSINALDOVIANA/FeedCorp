import  express  from  'express';
import avpr from "./controller/evaluation_by_results/index.js"
import user from "./controller/usuarios/index.js";
import unidades from './controller/unidades/index.js';
import permissoes from './controller/permissoes/index.js';
import multer from 'multer';
import multerconfig from "./config/multer.js";
import images from "./controller/images/imagecontrol.js";
const routes=express.Router();

 /*
 obs: tabela "string_string" não precisão de rotas delete
 pois elas são tabelas de relacionamento e uma vez excluido o id da tabela origem
 o cascateamento tambem apaga o registro nelas
*/


/*################################################ USUARIO ########################################*/

routes.post('/user/login',user.login);//obs:get nao recebe dados via body do navegador
routes.post('/user/insert',user.insert);//cria usuario na tabela "users"
routes.put('/user/update',user.update); // so atualiza dados na tabela "users", nao envolve outras tabelas
routes.delete('/user/delete',user.delete);//deleta usuario na tabela "users"

                      /*------rotas especiais------*/
routes.put('/user/update/user_permission',user.updateUser_permission); // atualiza em "user_permission"
routes.post('/user/insert/user_permission',user.insertUser_permission); // inserir dados em "user_permission"
routes.put('/user/update/user_unit',user.updateUser_unit); // atualiza em "user_unit"
routes.post('/user/insert/user_unit',user.insertUser_unit); // inserir dados  em "user_unit"
routes.put('/user/update/user_ebr',user.updateUser_ebr); // atualiza em "user_ebr"
routes.post('/user/insert/user_ebr',user.insertUser_ebr); // inserir dados em "user_ebr"
/*################################################################################################*/


/*################################################ UNIDADES ######################################*/

//cria unidades na tabela "units"
routes.post("/unit/create",unidades.create);


//deleta uma unidade na tabela "units"
routes.delete("/unit/delete",unidades.delete);

//atualiza uma unidade na tabela "units"
routes.put("/unit/update",unidades.update);

                               /*------rotas especiais------*/

// consulta quais unidades o usuario criou tambem ja devolve quantos e quais colaboradores tem na unidade
// a unidade do usuario  ja é carregada no login no objeto:unit
//se os parametros exigidos nao existirem retona todas as unidades cadastradas sem parametros de filtro
routes.get("/unit/consult",unidades.consult);
routes.put("/unit/update/unit_ebr",unidades.updateUnit_ebr);// atualiza a tabela "unit_ebr"
routes.post("/unit/insert/unit_ebr",unidades.insertUnit_ebr);// inserir na tabela "unit_ebr"

/*###################################################################################################*/






/*################################################ PERMISSIONS ######################################*/

routes.post("/permission/create",permissoes.create)//criar
routes.put("/permission/update",permissoes.update)//criar
routes.delete("/permission/delete",permissoes.delete)//criar

/*###################################################################################################*/

// ----------------------rotas de avaliação por resultados-----------------



routes.get("/avpr/gestor",avpr.get_gest_avpr);//retorna quais avalições por resultado o gestor criou
routes.post("/avpr/gestor",avpr.post_avpr_gestor);//rota para criação 





routes.get("/avpr/col",avpr.get_avpr_Col);//retorna quais avaliações por resultado foram linkadas para o colaborador
routes.post("/avpr/col",avpr.post_avpr_col);//salva as respostas

//retorna as metas e indicadores da av. por resultados 
// exige "id_tb_apr" que é o "id" da av. por resultados pego na rota "/avpr/col" 
routes.get("/avpr/metas",avpr.get_metas_avpr);//podera ser usado por adm/gestor/col

// vai retornar os resultados 
// {"id_tb_metas":3,"col_idcol":1} exige o id da tabela metas e do colaborador
routes.get("/avpr/resultados",avpr.get_result_col);


//retorna quantos colaboradores ja responderam
routes.get("/avpr/quantidade",avpr.get_QT_responderam_avpr);


//fotos ou images
routes.post('/images/salvar', multer(multerconfig).single('file'),images.salvar);
routes.delete('/images/deletar',images.deletar);
routes.get("/images/listar",images.listar)









export default routes;