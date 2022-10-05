import conexao from "../../database/connection.js";

export default {
    async Insert(req, res) {
        let { office } = req.body;
        try {
            const [id] = await conexao("positions").insert({ office });
            return res.json({ status: true, cargo: { id, office } });
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "error cargos=>insert" });
        }
    },
    async select(req, res) {
        let { id } = req.query;
        try {
            let cargo = !!id ? await conexao("positions").where({ "id": id }).first() : await conexao("positions");
            return res.json({ status: true, cargo });
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "error cargos=>select" });
        }
    },
    async update(req, res) {
        let { id, office } = req.body;
        try {
            await conexao("positions").update({ office }).where({ "id": id });
            return res.json({ status: true, mensage: "dados atualizados" });
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "error cargos=>update" })
        }

    },
    async del(req, res) {
        let { id } = req.query;
        try {
            await conexao("positions").del().where({ id });
            return res.json({ status: true, mensage: "dados apagados" });
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "error cargos=>delete" });
        }
    }
}