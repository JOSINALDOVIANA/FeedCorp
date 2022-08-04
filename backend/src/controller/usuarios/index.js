
import conexao from '../../database/connection.js';

export default {
    async create(req, res) {
        const { name, nameuser, id_image = null, email, password, permissions, id_unit = false } = req.body;

        try {
            await conexao.transaction(async trx => {
                const user = await trx("users").insert({
                    name, nameuser, email, id_image, password
                });

                const perm_serial = permissions.map(item => ({ "id_user": user[0], "id_permission": item }));
                await trx("user_permission").insert(perm_serial);

                !id_unit ? null : await trx("user_unit").insert({ id_user: user[0], id_unit });

                return res.json({ status: true });
            })

        } catch (error) {

            return res.json({
                status: false,
                "message": error.sqlMessage
            })
        }
    },
    async delete(req, res) {
        const { password, id, email } = req.body;
        const dados = await conexao("users").where({ id, email }).first();

        try {
            if (dados && dados.password === password) {
                await conexao("users").del().where({ id, password })
                res.json({ status: true });
            }
            else (
                res.json({ status: false, "message": "e-mail ou senha incorreto!!" })
            )


        } catch (error) {
            // console.log(error);
            res.json({ error: true, message: error.sqlMessage })
        }
    },

    async update(req, res, next) {
        const {
            id,
            name,
            nameuser,
            email,
            id_image = null,
            password,
            passwordantigo,
            permissions = [],
            id_unit = false,

        } = req.body;


        try {
            await conexao.transaction(async trx => {
                const dadosantigos = await trx("users").where({ id }).first();

                if (dadosantigos && passwordantigo == dadosantigos.password) {
                    await trx("users").update({
                        name,
                        nameuser,
                        email,
                        password,
                        id_image,
                    }).where({ id });

                    await trx("user_permission").delete().where({ "id_user": id });
                    const perm_serial = permissions.map(item => ({ "id_user": id, "id_permission": item }));

                    await trx("user_permission").insert(perm_serial);

                    !id_unit ? null : await trx("user_unit").insert({ "id_user": id, id_unit });

                    res.json({ status: true })
                } else {

                    res.json({ status: false, message: "Ops!! algo de errado não esta certo, verifique os dados e tente novamente." })
                }
            })

        } catch (error) {

            return res.json({ status: false, message: error })
        }

    },
    async login(req, res) {
        //observe se houver error ele retorna um status false
        let dados;

        try { //inicio try
            const { email = false, nameuser = false, password } = req.body; // dados vindos na rota
            if (!email) { //se não vier email ele usa nameuser

                dados = await conexao("users").where({ nameuser }).first(); // o first sempre retona [dados].lenget =1 caso ache dados 

            }
            if (!nameuser) { // se nao vier nameuser ele usa o email
                dados = await conexao("users").where({ email }).first();

            }

            if (!!dados && dados.password === password) { //verifico se dados nao esta vazio e se a senha bate com a recebida na rota
                //carrego as permissoes deste usuario
                const perm = await conexao("user_permission").join("permissions", "user_permission.id_permission", "=", "permissions.id").where({ "user_permission.id_user": dados.id });
                //carregando a unidade do usuario
                const unit = await conexao("user_unit").join("units", "user_unit.id_unit", "=", "units.id").where({ "user_unit.id_user": dados.id })
                // respondendo a requisição 
                return res.json({ dados, ...{ "permissions": perm }, ...{ unit } });



            }
            else { // se dados estiver vazio ou senha nao for igual ele responde
                return res.json({ status: false, message: "vefique os dados e tente novamente" });
            }
        } catch (error) {

            return res.json({
                status: false,
                mensagem: "error server"
            })
        }

    },
    async listAll(req, res) {
        try {
            await conexao.transaction(async trx => {
                return res.json(await trx("users"));
            })
        } catch (error) {
            console.log(error)
            return res.json({ error: true })
        }
    }
}