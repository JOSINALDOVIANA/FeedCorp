import knex from "knex";

const conexao= knex({
    client: 'mysql',
    connection: {
     
      user : 'root',
      password : '',
      database : 'avdenterprise'
    }
  });
export default {

    async Login(req,res){
            const {email,password}=req.body;        
            
            try {
              
              const user = await conexao("user").select("*").where({email,password}).first();
              
              if (user) {
               const permisao = await conexao("permissao").join("cat_per","permissao.idpermissao","=","cat_per.per_id").where("cat_per.cat_id",user.categ_id)
                .select("permissao.descri");
                let p=[];
                permisao.forEach(i=>(p.push(i.descri)));
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
    