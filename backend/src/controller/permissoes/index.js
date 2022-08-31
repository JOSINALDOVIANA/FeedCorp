import { response } from "express";
import conexao from '../../database/connection.js';

export default {
    async create(req,res,next){
        const {descriptions,id_user}=req.body;

        try {
            let perm_serial;
            !id_user?perm_serial=descriptions.map(description=>({description})):perm_serial=descriptions.map(description=>({description,id_user}));
            await conexao("permissions").insert(perm_serial);
           
            res.json({status:true,message:"permisoes adicionadas"});
        } catch (error) {
          //  console.log(error);
            res.json({status:false,mensagem:"error server"});
        }
    },
    async update(req,res,next){
        const {description,id}=req.body;

        try {
           
          await  conexao("permissions").update({description}).where({id});
          
            res.json({status:true,message:"permissão atualizada"});
        } catch (error) {
           console.log(error);
            res.json({status:false,mensagem:"error permissions=>update"});
        }
    },
    async delete(req,res,next){
        const {id}=req.query;

        try {
           
          await  conexao("permissions").delete().where({id});
          
            res.json({status:true,message:"permisão apagada"});
        } catch (error) {
         
            res.json({status:false,mensagem:"error permissions=>delete"});
        }
    },
    async get(req,res,next){        
        const {id=false}=req.query;
        try {
           let permissions
            !id?permissions=await conexao("permissions"):
            permissions=await conexao("permissions")
            .where({id})
            .select("permissions.id","permissions.description");
          
            res.json({status:true,permissions});
        } catch (error) {
         console.log(error)
            res.json({status:false,mensagem:"error permissions=>getPermissions"});
        }
    },

  
}