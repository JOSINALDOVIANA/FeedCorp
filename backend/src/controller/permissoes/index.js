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
    }
}