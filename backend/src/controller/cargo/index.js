import conexao from "../../database/connection.js";

export default {
    async Insert(req, res) {
        let { office, id_company=null,id_user=null } = req.body;
        try {
            const [id] = await conexao("positions").insert({ office,id_company,id_user });
            return res.json({ status: true, cargo: { id, office,id_company,id_user } });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "error cargos=>insert" });
        }
    },
    async select(req, res) {
        let { id=false,id_company=false ,id_user=false} = req.query;
        try {
            let cargo = id ? await conexao("positions").where({ "id": id }).first() : 
            id_company?await conexao("positions").where({id_company}):
            id_user?await conexao("positions").where({id_user}):await conexao("positions");
            let cargo_serial=[]
            for (let iterator of cargo) {
                let users=await conexao("users").where({id_office:iterator.id})
                iterator={...iterator,users}
                cargo_serial.push(iterator)
            }
            cargo=cargo_serial
            return res.json({ status: true, cargo });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "error cargos=>select" });
        }
    },
    async update(req, res) {
        let { id, office } = req.body;
        try {
            await conexao("positions").update({ office }).where({ "id": id });
            return res.json({ status: true, mensage: "dados atualizados" });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "error cargos=>update" })
        }

    },
    async del(req, res) {
        let { id } = req.query;
        try {
            await conexao("positions").del().where({ id });
            return res.json({ status: true, mensage: "dados apagados" });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "error cargos=>delete" });
        }
    }
}