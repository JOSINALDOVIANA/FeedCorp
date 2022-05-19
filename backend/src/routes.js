import  express  from  'express';

import adm from './controller/adm/index.js';
import gestor from './controller/gestor/index.js';


  
const routes=express.Router();


routes.post('/adm/login',adm.Login);
routes.post('/gestor/login',gestor.Login);
 
//TOP OF THE QUALITY
//JOSINALDO DO DO!!



export default routes;