import conexao from '../../database/connection.js';

export default {
    async create(req,resp){
        const {units,id_user}=req.body;
        const unit_serial=units.map(description=>({description,id_user}));
        try {
           await conexao("units").insert(unit_serial)
            resp.json({status:true,message:"dados salvos"});
        } catch (error) {
           // console.log(error)
            resp.json({error:true})
        }
    },


    // consulta quais unidades o usuario criou
    async consult(req,res){
        const {id_user=false}=req.query;
        // se nao vier id_user vai ser retonado todas
        try {
            if(!id_user){await conexao("units").select("*").then(r=>res.json(r))}
            else{

            const units=await conexao("units").select("*").where({id_user});
            let units_serialised=[];
            for (let i = 0; i < units.length; i++) {
                    const Colaboradores= await conexao("user_unit").where({"id_unit":units[i].id}).join("users","users.id","=","user_unit.id_user")
                    const [contador] = await conexao("user_unit").where({"id_unit":units[i].id}).count().join("users","users.id","=","user_unit.id_user");
                    units_serialised[i]={...units[i],cols:contador['count(*)'],Colaboradores};           
            }
            
            res.json(units_serialised)
        }
        } catch (error) {
            res.json({error:true,message:error.sqlMessage});
        }
    },
    // consulta quantos usuarios por unidade
    async consult2(req,res){
        const {id_unit}=req.body
        try {
           const [numero]= await conexao("user_unit").count().where({id_unit});
           
           return res.json({cols:numero['count(*)']})
        } catch (error) {
          //  console.log(error)
            res.json({error:true,message:error.sqlMessage});
        }
    },
    async consultarColaborador(req,res){
        const {id_user}=req.body
        try {
            await (await conexao("user_unit").select("units.description"))
            .join("units","user_unit.id_unit","=","units.id")
            .where({"user_unit.id_user":id_user}).then(r=>res.json(r));
        } catch (error) {
           // console.log(error)
            res.json({error:true,message:error.sqlMessage});
        }
    }
}