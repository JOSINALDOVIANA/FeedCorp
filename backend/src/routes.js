import  express  from  'express';

import user from './controller/usuarios/index.js';
;


  
const routes=express.Router();


routes.post('/login',user.Login);

 
//TOP OF THE QUALITY
//JOSINALDO DO DO!!



export default routes;