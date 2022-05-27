import  express  from  'express';

import user from './controller/usuarios/index.js';
import avpr from "./controller/funçooes/avpr/index.js"
import adm from "./controller/adm/index.js";
import gestor from './controller/gestor/index.js';
import unidades from './controller/funçooes/unidades/index.js';
import colaborador from './controller/colaborador/index.js';
const routes=express.Router();

// rota para login de todos
routes.post('/login',user.Login);




//rotas para o adm
routes.post("/adm",adm.Cad);
routes.delete("/adm",adm.Del);

//rotas para o gestor
routes.post("/gestor",gestor.Cad);

//rotas para o colaborador
routes.post("/col",colaborador.create);
routes.get("/col_gestor",colaborador.get_col_gestor);
routes.get("/col_adm",colaborador.get_col_adm);
routes.get("/col_und",colaborador.get_col_und);

//----------------------------udidades-----------------------
routes.post("/unidades",unidades.criate)//criar


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


//rtorna quantos col ja responderam
routes.get("/avpr/quantidade",avpr.get_QT_responderam_avpr);











export default routes;