import  express  from  'express';
import avpr from "./controller/evaluation_by_results/index.js"
import user from "./controller/usuarios/index.js";
import unidades from './controller/unidades/index.js';
import permissoes from './controller/permissoes/index.js';
import multer from 'multer';
import multerconfig from "./config/multer.js";
import images from "./controller/images/imagecontrol.js";
const routes=express.Router();

// usuarios
routes.post('/user/login',user.login);
routes.post('/user/create',user.create);
routes.put('/user/update',user.update);
routes.get("/user/listAll",user.listAll);


//----------------------------unidades-----------------------
routes.post("/unit/create",unidades.create)
routes.get("/unit/consult",unidades.consult)// consulta quais unidades o usuario criou tambem ja devolve quantos e quais colaboradores na unidade
// routes.get("/unit/consult2",unidades.consult2)

//----------------------------permissoes--------------------
routes.post("/permission/create",permissoes.create)//criar


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