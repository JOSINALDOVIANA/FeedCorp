import { json } from "express";
import conexao from "../../database/connection.js";

export default {
    async ModuleInsert(req,res){
        const {module,value}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             const id=await  trx("modules").insert({module,value})
             return res.json({status:true,dados:{id:id[0],module,value}})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
}