import conexao from '../../database/connection.js';

export default {
    async create(req, resp) {

        const { units, id_user } = req.body; //units=[string,string], id_user=int

        const unit_serial = units.map(description => ({ description, id_user }));
        try {
            await conexao("units").insert(unit_serial)
            resp.json({ status: true, message: "dados salvos" });
        } catch (error) {

            resp.json({ status: false, message: "error: unit-create" });
        }
    },
    async insertUnit_ebr(req, resp) {

        const {id_unit,id_ebr} = req.body;

        
        try {
            await conexao("unit_ebr").insert({id_ebr,id_unit})
            resp.json({ status: true, message: "dados salvos" });
        } catch (error) {

            resp.json({ status: false, message: "error: unit-create" });
        }
    },
    async getUnit_ebr(req, resp) {

        const {id_unit} = req.body;

        
        try {
           const dados= await conexao("unit_ebr").where({id_unit}).join("evaluation_by_results","evaluation_by_results.id","=","unit_ebr.id_ebr");
            resp.json({ status: true,dados });
        } catch (error) {

            resp.json({ status: false, message: "error: unit->getUnit_ebr" });
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
    async updateUnit_ebr(req, resp) {

        const { id,id_unit, id_ebr } = req.body;        
        try {
            await conexao("unit_ebr").update({id_ebr,id_unit}).where({id})
            resp.json({ status: true, message: "dados alterados" });
        } catch (error) {
            resp.json({ status: false, message: "error: unit-update" });
        }
    },
    
    async consult(req, res) {
        const { id_user = false } = req.query; // id_user=int
        // se nao vier id_user vai ser retonado todas
        try {
            if (!id_user) { await conexao("units").select("*").then(r => res.json(r)) }
            else {

                const units = await conexao("units").select("*").where({ id_user });
                let units_serialised = [];
                for (let i = 0; i < units.length; i++) {
                    const Colaboradores = await conexao("user_unit").where({ "id_unit": units[i].id }).join("users", "users.id", "=", "user_unit.id_user")
                    const [contador] = await conexao("user_unit").where({ "id_unit": units[i].id }).count().join("users", "users.id", "=", "user_unit.id_user");
                    units_serialised[i] = { ...units[i], cols: contador['count(*)'], Colaboradores };
                }

                res.json(units_serialised)
            }
        } catch (error) {
            res.json({ error: true, message: error.sqlMessage });
        }
    },
   
   
    async delete(req, res) {
        const { id_user, id_unit } = req.body;
        try {
            const del = await conexao("units").del().where({ id_user, "id": id_unit });

            return res.json({ status: true, message: "unidade apagada" });
        } catch (error) {
            res.json({ status: false, message: "error unit-delete" });
        }
    }
}