import conexao from '../../database/connection.js';

export default {
    async Insert(req, resp) {

        const { units, id_user } = req.body; //units=[string,string], id_user=int

        const unit_serial = units.map(unit => ({ description:unit.description,initials:unit.initials, id_user }));
        try {
            await conexao("units").insert(unit_serial)
            resp.json({ status: true, message: "dados salvos" });
        } catch (error) {

            resp.json({ status: false, message: "error: unit-create" });
        }
    }, 
   
    async update(req, resp) {

        const { unit, id_unit } = req.body; //units=string, id_unit=int       
        try {
            await conexao("units").update({"description":unit}).where({"id":id_unit})
            resp.json({ status: true, message: "dados alterados" });
        } catch (error) {
            resp.json({ status: false, message: "error: unit-update" });
        }
    },

    
    async getUnitCreateUser(req, res) {
        const { id_user = false,id_company=false} = req.query; // id_user=int
        // se nao vier id_user vai ser retonado todas
        try {
            if (id_user) { 
                const units = await conexao("units").select("units.id","units.description","units.initials").where({ id_user });
                let units_serialised = [];

               
                for (let i = 0; i < units.length; i++) {
                    const Colaboradores = await conexao("user_unit").where({ "id_unit": units[i].id }).join("users", "users.id", "=", "user_unit.id_user").select("users.id","users.id_image","users.email","users.name")
                    const [contador] = await conexao("user_unit").where({ "id_unit": units[i].id }).count().join("users", "users.id", "=", "user_unit.id_user");
                    units_serialised[i] = { ...units[i], cols: contador['count(*)'], Colaboradores };
                }

              return  res.json(units_serialised)
            }
            if(id_company){
                const units = await conexao("units").select("units.id","units.description","units.initials").where({ id_company });
                let units_serialised = [];

               
                for (let i = 0; i < units.length; i++) {
                    const Colaboradores = await conexao("user_unit").where({ "id_unit": units[i].id }).join("users", "users.id", "=", "user_unit.id_user").select("users.id","users.id_image","users.email","users.name")
                    const [contador] = await conexao("user_unit").where({ "id_unit": units[i].id }).count().join("users", "users.id", "=", "user_unit.id_user");
                    units_serialised[i] = { ...units[i], cols: contador['count(*)'], Colaboradores };
                }

              return  res.json(units_serialised)
            }        
            return res.json({status:true,units:await conexao('units')})
        } catch (error) {
            res.json({ error: true, message: error.sqlMessage });
        }
    },
    async getAll(req, res) {
        
       const {id=false}=req.query
        try {            
                if(id){
                  return  res.json({status:true,units:await conexao("units").where({id})})
                    
                }
               return res.json({status:true,units:await conexao("units")})
            }
         catch (error) {
            console.log(error)
           return  res.json({ error: true, message: error.sqlMessage });
        }
    },
   
   
    async delete(req, res) {
        const { id_user, id } = req.body;
        try {
            const del = await conexao("units").del().where({ id_user, id });

            return res.json({ status: true, message: "unidade apagada" });
        } catch (error) {
            res.json({ status: false, message: "error unit-delete" });
        }
    }
}