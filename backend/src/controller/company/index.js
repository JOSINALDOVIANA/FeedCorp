import conexao from "../../database/connection.js";
import { up } from "../../database/migrations/20220728170813_units.js";

export default {

    async Insert(req,res){
        const {
            namefantasy,
            cnpj,
            id_country,
            id_city,
            id_state,
            postcard,
            id_plan=null        
        } = req.body;

        try {
            await conexao.transaction(async(trx)=>{
               const id= await trc("companies").Insert({namefantasy,cnpj,id_city,id_country,id_plan,id_state,postcard});
              return res.json({status:true, company:await trx("companies").where({id})})
            })
        } catch (error) {
            console.log(error)
           return res.json({status:false,mensage:error})
        }
    },

    async Delete(req,res){
        const {id}=req.body;
        try {
            await conexao.transaction(async (trx)=>{
                trx("companies").del().where({id});
                return res.json({startus:true})
            })
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:error})
        }
    },
    async Get(req,res){
        const {id}=req.query;
        try {
            await conexao.transaction(async (trx)=>{
               let company=await trx("companies").where({id}).first();
               const city= await trx("cities").where({id:company.id_city}).first();
               const country= await trx("countries").where({id:company.id_country}).first();
               const state= await trx("states").where({id:company.id_state}).first();
               company={... company,city,country,state}
                return res.json({startus:true,company})
            })
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:error})
        }
    },
    async Update(req,res){
        const {
            id,
            namefantasy,
            cnpj,
            id_country,
            id_city,
            id_state,
            postcard,
            id_plan=null        
        } = req.body;
        try {
            await conexao.transaction(async (trx)=>{
               await trx("companies").where({id}).update({namefantasy,cnpj,id_city,id_country,id_plan,id_state,postcard});              
               
                return res.json({startus:true})
            })
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:error})
        }
    },
}