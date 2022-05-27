import knex from "knex";
import conexao from "../../database/connection.js";

export default {

    async Login(req,res){
            const {email,password}=req.body;        
            
            try {
              
              const user1 = await conexao("adm").select("*").where({email,password}).first();
              
              if (user1) {
               const permisao = await conexao("permissoes")
               .join("adm_com_permissoes","permissoes.idper","=","adm_com_permissoes.permissoes_idper").where("adm_com_permissoes.adm_idadm",user1.idadm)
                .select("permissoes.*");
                
                let p=[];
                // permisao.forEach(i=>(p.push({[i.descri]:true})));
                permisao.forEach(i=>(p.push(i.descri)));
                res.json({...user1,...{permissoes:p}});               
               
              }else{

                const user2 = await conexao("gestor").select("*").where({email,password}).first();

                if (user2) {
                  const permisao = await conexao("permissoes")
               .join("gestor_com_permissoes","permissoes.idper","=","gestor_com_permissoes.permissoes_idper").where("gestor_com_permissoes.gestor_idgestor",user2.idgestor)
                .select("permissoes.*");
                
                let p=[];
                // permisao.forEach(i=>(p.push({[i.descri]:true})));
                permisao.forEach(i=>(p.push(i.descri)));
                res.json({...user2,...{permissoes:p}});   
                }else{
                  const user3 = await conexao("col").select("*").where({email,password}).first();

                  if (user3) {
                    
                  const permisao = await conexao("permissoes")
                  .join("col_com_permissoes","permissoes.idper","=","col_com_permissoes.permissoes_idper").where("col_com_permissoes.col_idcol",user3.idcol)
                   .select("permissoes.*");
                   
                   let p=[];
                   // permisao.forEach(i=>(p.push({[i.descri]:true})));
                   permisao.forEach(i=>(p.push(i.descri)));
                   res.json({...user3,...{permissoes:p}}); 
                  }else{
                    res.json({login:false})
                  }

                }

              }

              
            
             
            
             
            } catch (error) {
             console.log(error)
              res.json({login:false});
              
            }
               
            }
    }
    