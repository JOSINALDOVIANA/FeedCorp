
import conexao from '../../database/connection.js';

export default {
    async insert(req, res) {
        const { name, nameuser, id_image = null, email, password,permissions=[], id_unit = false } = req.body;

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
    async insertUser_permission(req, res) {
        const { permissions=[],id_user } = req.body;

        try {
            await conexao.transaction(async trx => {
                const permid=await trx("user_permission").where({id_user});

                if(permid){
                  return  res.redirect(`http://localhost:${process.env.PORT}/user/update/user_permission?id_user=${id_user}&id_permission=${permissions[0]}`);
                }

                const perm_serial = permissions.map(item => ({ id_user, "id_permission": item }));
                await trx("user_permission").insert(perm_serial);

                

                return res.json({ status: true });
            })

        } catch (error) {
            console.log(error)
            return res.json({
                status: false,
                "message": "error insertUser_permission"
            })
        }
    },
    async insertUser_ebr(req, res) {
        const { id_ebr,id_user } = req.body;

        try {
            await conexao.transaction(async trx => {
                

                
                await trx("user_ebr").insert({id_ebr,id_user});

                

                return res.json({ status: true });
            })

        } catch (error) {

            return res.json({
                status: false,
                "message": "error insertUser_ebr"
            })
        }
    },
    async insertUser_unit(req, res) {
        const { units=[],id_user } = req.body;

        try {
            await conexao.transaction(async trx => {
                

                const units_serial = units.map(item => ({ id_user, "id_unit": item }));
                await trx("user_unit").insert(units_serial);

                

                return res.json({ status: true });
            })

        } catch (error) {

            return res.json({
                status: false,
                "message": "error insertUser_unit"
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
            res.json({ status: false, message: "error user=>delete" })
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

                    
                    res.json({ status: true })
                } else {

                    res.json({ status: false, message: "Ops!! algo de errado não esta certo, verifique os dados e tente novamente." })
                }
            })

        } catch (error) {

            return res.json({ status: false, message: error })
        }

    },
    async updateUser_permission(req, res, next) {
        const {            
            id_user,
            id_permission,
            } = req.query;
        try {
            await conexao.transaction(async trx => {
                    await trx("user_permission").update({id_permission}).where({id_user});
                    res.json({ status: true , message:`aterado`});
            })
        } catch (error) {
            res.json({ status: false, message: "error updateUser_permission" })
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
                   await trx("user_unit").update({id_unit,id_user}).where({id});
                    res.json({ status: true , message:`aterado`})
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
                    await trx("user_ebr").update({id_ebr,id_user}).where({id});
                    res.json({ status: true , message:`aterado`})
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
                   const up= await trx("user_ebr").where({id_user}).join("evaluation_by_results",'evaluation_by_results.id','=','user_ebr.id_ebr').select("evaluation_by_results.*");
                    res.json({ status: true , dados:up})
            })

        } catch (error) {
            res.json({ status: false, message: "error getUser_ebr" })
        }

    },
    async getUser_unit(req, res, next) {
        const {
            
            id_user,
           
            } = req.query;

        try {
            await conexao.transaction(async trx => {
                const unit = await conexao("user_unit").join("units", "user_unit.id_unit", "=", "units.id").where({ "user_unit.id_user": id_user }).select("units.*")
                    res.json({ status: true , unit})
            })

        } catch (error) {
            console.log(error)
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
                    const perm = await conexao("user_permission").join("permissions", "user_permission.id_permission", "=", "permissions.id").where({ "user_permission.id_user": dados.id }).select("permissions.id","permissions.description");
                    //carregando a unidade do usuario
                    const unit = await conexao("user_unit")
                    .join("units", "user_unit.id_unit", "=", "units.id")
                    .where({ "user_unit.id_user": dados.id })
                    .select("units.id","units.description");
                    // respondendo a requisição 
                    return res.json({ status:true,...{dados, ...{ "permissions": perm }, ...{ unit }} });
                    
                }
            return res.json({ status: false, message: "vefique os dados e tente novamente" });
            }
        } catch (error) {
            console.log(error)
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