import knex from "knex";
import conexao from "../../database/connection.js";

export default {

    async Login(req,res){
            const {email,password}=req.body;        
            
            try {
              
              const user = await conexao("adm").select("*").where({email,password}).first();
              
              if (user) {
               const permisao = await conexao("permissao")
               .join("users_perm","permissao.idpermissao","=","users_perm.per_id").where("users_perm.cat",user.cat)
                .select("permissao.*");
                
                let p=[];
                permisao.forEach(i=>(p.push(i)));
                res.json({...user,...{permissoes:p}});
                
               
              }else{
                res.json({login:false});
              }
             
            
             
            
             
            } catch (error) {
             console.log(error)
              res.json({login:false});
              
            }
               
            }
    }
    