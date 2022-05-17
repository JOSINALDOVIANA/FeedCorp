import  express  from  'express';

import user from './controller/user/index.js';


  
const routes=express.Router();


routes.post('/login',user.Login);
 




export default routes;