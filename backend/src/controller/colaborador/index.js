import conexao from "../../database/connection.js";

export default {
    async create(req, res) {
        const {
            nome,
            sobrenome,
            email,
            img,
            password,
            cat,
            id_gestor,
            id_adm,
            Unidades_idUnidades
        } = req.body;
        try {
            await conexao("col").insert({
                nome,
                sobrenome,
                email,
                img,
                password,
                cat,
                id_gestor,
                id_adm,
                Unidades_idUnidades
            })
            res.json({ mensagem: "ok" })
        } catch (error) {
            console.log(error);
            res.json({ error: true })
        }
    },
    async get_col_gestor(req, res) {
        const { id_gestor } = req.body;
        try {
           const cols=await  conexao("col").where({id_gestor});
           res.json(cols);
        } catch (error) {
            console.log(error);
            res.json({error:true})
        }
        
    },
    async get_col_adm(req, res) {
        const { id_adm } = req.body;
        try {
           const cols=await  conexao("col").where({id_adm});
           res.json(cols);
        } catch (error) {
            console.log(error);
            res.json({error:true})
        }
     },
     async get_col_und(req, res) {
        const { Unidades_idUnidades } = req.body;
        try {
           const cols=await  conexao("col").where({Unidades_idUnidades});
           res.json(cols);
        } catch (error) {
            console.log(error);
            res.json({error:true})
        }
     }
}