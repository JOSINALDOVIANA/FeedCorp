import { json } from "express";
import conexao from "../../database/connection.js";

export default {
    async ModuleInsert(req,res){
        // modules=[{module,value}...]
        let {modules}=req.body
       
        try {
            await conexao.transaction(async (trx)=>{
             const id=await  trx("modules").insert(modules)
             return res.json({status:true,mensage:"inseridos"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async ModuleUpdate(req,res){
        // modules=[{id,module,value}...]
       let {modules}=req.body
       
        try {
            await conexao.transaction(async (trx)=>{
             for (const iterator of modules) {
                const {module,value}=iterator;
                await  trx("modules").update({module,value}).where({"id":iterator.id})
             }
             return res.json({status:true,mensagem:"atualizado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async ModuleDelete(req,res){
        const {id}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("modules").del().where({id})
             return res.json({status:true,mensagem:"deletado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async ModuleGet(req,res){
        const {id}=req.query

        try {
            await conexao.transaction(async (trx)=>{
             const module=await  trx("modules").where({id}).first();
             return res.json({status:true,module})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async ModuleGetAll(req,res){
        

        try {
            await conexao.transaction(async (trx)=>{
             
             return res.json({status:true,modules:await trx("modules")})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async PlansInsert(req,res){
        const {plan,value}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             const id=await  trx("plans").insert({plan,value})
             return res.json({status:true,dados:{id:id[0],plan,value}})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async PlansUpdate(req,res){
        const {id,plan,value}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("plans").update({plan,value}).where({id})
             return res.json({status:true,mensagem:"atualizado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async PlansDelete(req,res){
        const {id}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("plans").del().where({id})
             return res.json({status:true,mensagem:"deletado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async PlansGet(req,res){
        const {id_plan}=req.query

        try {

            await conexao.transaction(async (trx)=>{
             let plan=await trx("plans").where({id:id_plan}).first();
             let modules;
             if(!!plan){
                modules=await  trx("module_plan").where({id_plan}).join("modules","module_plan.id_module","=","modules.id").select("modules.*")
                plan={...plan,modules}
                return res.json({status:true,plan})
             }
             return res.json({status:false,mensage:"plano inexistente"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async PlansGetAll(req,res){
       

        try {

            await conexao.transaction(async (trx)=>{
                let p=[];
             let plans=await trx("plans");
             for (let key in plans) {
                 
                // // console.log(key)
                 const modules=await  trx("module_plan").where({id_plan:plans[key].id})
                 .join("modules","module_plan.id_module","=","modules.id")
                 .select("modules.*")
                 p.push({...plans[key],modules});
                 
             }
             return res.json({status:true,planos:p})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Plan_ModuleInsert(req,res){
        const {id_module,id_plan}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             const id=await  trx("module_plan").insert({id_plan,id_module})
             return res.json({status:true,mensage:"inserido"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Plan_ModuleUpdate(req,res){
        const {id,id_plan,id_module}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("module_plan").update({id_plan,id_module}).where({id})
             return res.json({status:true,mensagem:"atualizado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Plan_ModuleDelete(req,res){
        const {id}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("module_plan").del().where({id})
             return res.json({status:true,mensagem:"deletado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Plan_ModuleGet(req,res){
        const {id}=req.query

        try {
            await conexao.transaction(async (trx)=>{
             const module=await  trx("module_plan").where({id})
             return res.json({status:true,module})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Company_ModuleInsert(req,res){
        const {id_module,id_company}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             const id=await  trx("company_module").insert({id_company,id_module})
             return res.json({status:true,mensage:"inserido"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Company_ModuleUpdate(req,res){
        const {id,id_company,id_module}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("company_module").update({id_company,id_module}).where({id})
             return res.json({status:true,mensagem:"atualizado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Company_ModuleDelete(req,res){
        const {id}=req.body

        try {
            await conexao.transaction(async (trx)=>{
             await  trx("company_module").del().where({id})
             return res.json({status:true,mensagem:"deletado"})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
    async Company_ModuleGet(req,res){
        const {id_company}=req.query

        try {
            await conexao.transaction(async (trx)=>{
             const module=await  (await trx("company_module").where({id_company}))
             .join("modules","company_module.id_module",'=',"modules.id")
             return res.json({status:true,module})
            })
        } catch (error) {
            return res,json({status:false,mensage:error})
        }
    },
}