import conexao from "../../database/connection.js";


export default {

    async Insert(req,res){
        const {
            namefantasy,
            cnpj,
            id_country,
            id_city,
            id_state,
            postcard,
            id_plan=null,
            modules=[]        
        } = req.body;

        try {
            await conexao.transaction(async(trx)=>{
               const id= await trx("companies").insert({namefantasy,cnpj,id_city,id_country,id_plan,id_state,postcard});
               
               if(!!modules){
                let module_serial=modules.map(id_module=>({id_module,id_company:id[0]}))
                await trx("company_module").insert(module_serial);
               }
              return res.json({status:true, company:await trx("companies").where({id})})
            })
        } catch (error) {
            console.log(error)
           return res.json({status:false,mensage:error})
        }
    },

    async Delete(req,res){
        const {id}=req.query;
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
               let city;
               let country;
               let state;
               let plan;
               let modules_plan;          
               let module_solos;

               if (!!company) {
                city= await trx("cities").where({id:company.id_city}).first();
                country= await trx("countries").where({id:company.id_country}).first();
                state= await trx("states").where({id:company.id_state}).first();
                plan=await trx("plans").where({id:company.id_plan});
                plan=plan[0];
                modules_plan=await trx("module_plan").where({id_plan:company.id_plan})
               .join("modules","module_plan.id_module",'=','modules.id')
               .select("modules.*");
               let modules_plan_serial={};
               for (const iterator of modules_plan) {
                modules_plan_serial={...modules_plan_serial, [`${iterator.module}`]:{id:iterator.id,value:iterator.value}}
               }
               module_solos= await trx("company_module").where({id_company:company.id})
               .join("modules","company_module.id_module",'=','modules.id')
               .select("modules.*");
               let module_solos_serial={};
               for (const iterator of module_solos) {
                module_solos_serial={...module_solos_serial, [`${iterator.module}`]:{id:iterator.id,value:iterator.value}}
               }
               company={... company,city,country,state,plan,modules:{...modules_plan_serial,...module_solos_serial}}
               return res.json({startus:true,company})
               }
               return res.json({startus:false,mensage:"companhia não localizada"})

            })
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"erro comapny=>get"});
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
            id_plan=null,
                   
        } = req.body;
        try {
            await conexao.transaction(async (trx)=>{
               await trx("companies").where({id}).update({namefantasy,cnpj,id_city,id_country,id_plan,id_state,postcard});              
               
                return res.json({startus:true})
            })
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"erro company=>update"})
        }
    },
}