import { response } from "express";
import conexao from '../../database/connection.js';

export default {
    async create(req,res,next){
        const {descriptions}=req.body;

        try {
            const perm_serial=descriptions.map(description=>({description}));
            const permitions=await conexao("permissions").insert(perm_serial);
           // console.log(permitions)
            res.json({status:true,message:"permisoes adicionadas"});
        } catch (error) {
          //  console.log(error);
            res.json({status:false,mensagem:"error server"});
        }
    },
    async update(req,res,next){
        const {description,id}=req.body;

        try {
           
            conexao("permissions").update({description}).where({id});
          
            res.json({status:true,message:"permisão atualizada"});
        } catch (error) {
          //  console.log(error);
            res.json({status:false,mensagem:"error permissions=>update"});
        }
    },
    async delete(req,res,next){
        const {id}=req.body;

        try {
           
            conexao("permissions").delete().where({id});
          
            res.json({status:true,message:"permisão apagada"});
        } catch (error) {
         
            res.json({status:false,mensagem:"error permissions=>delete"});
        }
    },
}