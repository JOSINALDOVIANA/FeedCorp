
import conexao from '../../database/connection.js';
import isEmpty from '../../isEmpty.js';
export default {
    async insert(req, res) {
        let {
            name,
            nameuser,
            id_image = null,
            email,
            password,
            id_permission = false,
            id_unit = null,
            id_company = null,
            id_creator = null,
            id_office = null,
        } = req.body;

        try {
            await conexao.transaction(async trx => {
                if (!id_permission) {
                    const permission = await trx("permissions").where({ "description": "administrador" });
                    id_permission = permission[0].id

                }
                const user = await trx("users").insert({
                    name,
                    nameuser,
                    email,
                    id_image,
                    password,
                    id_company,
                    id_creator,
                    id_permission,
                    id_office
                });




                !!id_unit ? await trx("user_unit").insert({ id_user: user[0], id_unit }) : null;

                return res.json({ status: true, dadosUser: await trx("users").where({ id: user[0] }).first() });
            })

        } catch (error) {
            // // console.log(error)
            return res.json({
                status: false,
                "message": error.sqlMessage
            })
        }
    },
    async GetAll(req, res) {
        const { id = false, id_company = false } = req.query;

        try {
            if (id) {
                let Users = await conexao("users").where({ "users.id": id })
                    // .join("images","users.id_image",'=','images.id')
                    .select("users.*")
                    .first()
                let url = await conexao("images").where({ id: Users.id_image }).first();
                return res.json({ status: true, Users: { ...Users, url } });
            }
            if (id_company) {
                return res.json({ status: true, Users: await conexao("users").where({ "users.id_company": id_company }).join("images", "users.id_image", '=', 'images.id').select("users.*", "images.url") });
            }

            return res.json({ status: true, Users: await conexao("users") });


        } catch (error) {
            // console.log(error)
            return res.json({
                status: false,
                "message": error.sqlMessage
            })
        }
    },

    async insertUser_ebr(req, res) {
        const { id_ebr, id_user } = req.body;

        try {
            await conexao.transaction(async trx => {



                await trx("user_ebr").insert({ id_ebr, id_user });



                return res.json({ status: true });
            })

        } catch (error) {
            // console.log(error)
            return res.json({
                status: false,
                "message": "error insertUser_ebr"
            })
        }
    },
    async insertUser_unit(req, res) {
        const { units = [], id_user } = req.body;

        try {
            await conexao.transaction(async trx => {


                const units_serial = units.map(item => ({ id_user, "id_unit": item }));
                await trx("user_unit").insert(units_serial);



                return res.json({ status: true });
            })

        } catch (error) {
            // console.log(error)
            return res.json({
                status: false,
                "message": "error insertUser_unit"
            })
        }
    },
    async delete(req, res) {
        const { password, id, email } = req.query;

        const dados = await conexao("users").where({ id, email }).first();
        // // console.log(dados)
        try {
            if ((!dados || !isEmpty(dados)) && dados.password == password) {
                await conexao("users").del().where({ id, password })
                res.json({ status: true });
            }
            else (
                res.json({ status: false, "message": "e-mail ou senha incorreto!!" })
            )


        } catch (error) {
            // console.log(error);
            res.json({ status: false, message: "error user=>delete" })
        }
    },

    async update(req, res, next) {
        const {
            id,
            name,
            nameuser,
            email,
            id_image = false,
            password,
            passwordantigo,
            id_company = false,
            id_creator = false,
            id_permission = false,
            id_office = false,
            id_unit = false
        } = req.body;
        // // console.log(req.body)

        try {

            const dadosantigos = await conexao("users").where({ "users.id": id }).first();
            // // console.log(req.body)
            if (!isEmpty(dadosantigos) && passwordantigo == dadosantigos.password) {
                await conexao("users").update({
                    name,
                    nameuser,
                    email,
                    password,
                    id_image: id_image ? id_image : null,
                    id_company: id_company ? id_company : null,
                    id_creator: id_creator ? id_creator : null,
                    id_permission: id_permission ? id_permission : null,
                    id_office: id_office ? id_office : null,
                }).where({ id });

                if (id_unit) {

                    let dado = await conexao("user_unit").where({ "user_unit.id_user": id }).first();
                    // console.log(dado)
                    if (dado) {
                        await conexao("user_unit").update({ "user_unit.id_unit": id_unit, "user_unit.id_user": id }).where({ "user_unit.id": dado.id });
                    }
                    else {
                        await conexao("user_unit").insert({ "user_unit.id_unit": id_unit, "user_unit.id_user": id });
                    }
                }


                res.json({ status: true })
            } else {

                res.json({ status: false, message: "Ops!! algo de errado não esta certo, verifique os dados e tente novamente." })
            }

        } catch (error) {
            // console.log(error)
            return res.json({ status: false, message: error })
        }

    },

    async updateUser_unit(req, res, next) {
        const {
            id,
            id_user,
            id_unit,
        } = req.body;
        try {
            await conexao.transaction(async trx => {
                await trx("user_unit").update({ id_unit, id_user }).where({ id });
                res.json({ status: true, message: `aterado` })
            })

        } catch (error) {
            res.json({ status: false, message: "error updateUser_unit" })
        }

    },
    async updateUser_ebr(req, res, next) {
        const {
            id,
            id_user,
            id_ebr,
        } = req.body;

        try {
            await conexao.transaction(async trx => {
                await trx("user_ebr").update({ id_ebr, id_user }).where({ id });
                res.json({ status: true, message: `aterado` })
            })

        } catch (error) {
            res.json({ status: false, message: "error updateUser_ebr" })
        }

    },
    async getUser_ebr(req, res, next) {
        const {

            id_user,

        } = req.query;

        try {
            await conexao.transaction(async trx => {
                const up = await trx("user_ebr").where({ "user_ebr.id_user": id_user }).join("evaluation_by_results", 'evaluation_by_results.id', '=', 'user_ebr.id_ebr').select("evaluation_by_results.*");
                res.json({ status: true, dados: up })
            })

        } catch (error) {
            // console.log(error)
            res.json({ status: false, message: "error getUser_ebr" })
        }

    },
    async getUser_unit(req, res, next) {
        const {

            id_user,

        } = req.query;

        try {
            await conexao.transaction(async trx => {
                const unit = await conexao("user_unit").join("units", "user_unit.id_unit", "=", "units.id").where({ "user_unit.id_user": id_user }).select("units.*").first()
                res.json({ status: true, unit })
            })

        } catch (error) {
            // console.log(error)
            res.json({ status: false, message: "error getUser_unit" })
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

            if (!dados) { //verifico se dados  esta vazio 
                return res.json({ status: false, message: "vefique os dados e tente novamente" });
            }
            else {
                if (!!dados && dados.password === password) {
                    //carrego as permissoes deste usuario
                    const permissions = await conexao("permissions").where({ id: dados.id_permission }).select("permissions.description");
                    //carregando a unidade do usuario
                    const unit = await conexao("user_unit")
                        .join("units", "user_unit.id_unit", "=", "units.id")
                        .where({ "user_unit.id_user": dados.id })
                        .select("units.id", "units.description");
                    //carregando a empresa
                    let company = await conexao("companies").where({ "id": dados.id_company });
                    if (!company) {
                        company[0].state = await conexao("states").where({ "id": company.id_state }).first();
                        company[0].city = await conexao("cities").where({ "id": company.id_city }).first();
                        company[0].country = await conexao("countries").where({ "id": company.id_country }).first();
                    }

                    // carregando o cargo
                    let cargo = await conexao("positions").where({ "id": dados.id_office }).first();


                    // respondendo a requisição 
                    dados.password=""
                    return res.json({ status: true, ... { dadosUser: dados }, permissions, unit, company, cargo });

                }
                return res.json({ status: false, message: "vefique os dados e tente novamente" });
            }
        } catch (error) {
            // console.log(error)
            return res.json({
                status: false,
                mensagem: "error server"
            })
        }

    },

}