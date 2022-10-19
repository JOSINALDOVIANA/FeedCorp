import conexao from "../../database/connection.js";
import isEmpty from "../../isEmpty.js"
export default {
    async Insert(req, res) {


        let { objective, id_user, progress = 0, validity, keys } = req.body;
        validity = new Date(validity);
        //keys=[{description,id_okr=null,id_user,status}...]
        //validity=new date()
        console.log(req.body)
        console.log(validity)
        try {
            await conexao.transaction(async trx => {
                const id_okr = await trx("okrs").insert({ objective, id_user, progress, validity });

                if (!!keys) {
                    let keys_serial = keys.map(key => ({
                        id_okr: id_okr[0],
                        description: key.description,
                        id_user: key.id_user,
                        status: key.status

                    }));
                    await trx("keys").insert(keys_serial);

                    return res.json({
                        status: true, okr: {
                            objective, id: id_okr[0], id_user, progress, validity, keys: keys_serial
                        }
                    })
                }
                return res.json({ status: true, okr: { objective, id: id_okr[0], id_user, progress, validity } })
            })
            // return res.json({status:true})
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro okr=>insert" })
        }
    },
    async update(req, res) {
        // console.log("chegou aqui");
        let { id, objective, id_user, progress = 0, validity, keys, concluded = false } = req.body;
        //keys=[{id,description,id_okr=obrigatorio,id_user,status}...]
        if (concluded) {
            concluded = new Date();
        }
        validity = new Date(validity);
        try {
            await conexao.transaction(async trx => {
                await trx("okrs").update({ objective, id_user, progress, validity, concluded }).where({ id });

                if (!!keys) {
                    let keys_serial = keys.map(key => ({ ...key, id_okr: id }));
                    for (const iterator of keys_serial) {
                        const { description, id_okr, id_user, status } = iterator;
                        await trx("keys").update({ description, id_okr, id_user, status }).where({ id: iterator.id })
                    }

                    return res.json({
                        status: true, okr: {
                            objective, id, id_user, progress, validity, keys
                        }
                    })
                }
                return res.json({
                    status: true, okr: {
                        objective, id, id_user, progress, validity
                    }
                })
            })
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro okr=>update" })
        }
    },
    async getOne(req, res) {

        const { id } = req.query;
        // console.log(req.query)
        try {
            if (!!id) {
                const okr = await conexao('okrs').where({ id }).first();
                console.log(okr)
                let keys = [];
                if (!!okr) {
                    keys = await conexao("keys").where({ id_okr: okr.id }).join("users", "users.id", "=", "keys.id_user").select("keys.*", "users.name" );
                }

                if (!isEmpty(okr)) {

                    return res.json({ status: true, okr: { ...okr, keys } })
                }

                return res.json({ status: false, mensage: "okr não localizado" })

            } else {

                return res.json({ status: true, okrs: await conexao("okrs") })
            }
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro okr=>getOne" })
        }
    },
    async getTwu(req, res) {

        const { id_user } = req.query;

        try {
            if (!!id_user) {
                let okrs = await conexao('okrs').where({ id_user });

                for (const index in okrs) {
                    let keys = await conexao("keys").where({ id_okr: okrs[index].id }).join("users", "keys.id_user", "=", "users.id").select("keys.*", "users.name");
                    okrs[index] = { ...okrs[index], keys };
                }
                return res.json({ status: true, okrs })
            }
            return res.json({ status: true, okrs: await conexao("okrs") });

        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro okr=>getTwu" })
        }
    },
    async delete(req, res) {
        const { id } = req.query;
        try {
            await conexao("okrs").del().where({ id })
            return res.json({ status: true, mensage: "apagado" })
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "error okr=>delete" })
        }
    },
    async keysInsert(req, res) {

        // keys=[{description,id_okr,id_user,statu=0}...]
        const { keys } = req.body;
        try {
            await conexao.transaction(async trx => {
                await trx("keys").insert(keys);



                return res.json({ status: true, mensage: "salvos" })

            })
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro keys=>insert" })
        }
    },
    async keysupdate(req, res) {
        // keys=[{id,description,id_okr,id_user,statu=0}...]
        const { keys } = req.body;

        try {
            await conexao.transaction(async trx => {
                for (const index in keys) {
                    const { id, description, id_okr, id_user, status = 0 } = keys[index]
                    await trx("keys").update({ description, id_okr, id_user, status }).where({ id });
                }

                return res.json({ status: true, mensage: "atualizados" })
            })
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro keys=>update" })
        }
    },
    async keysgetOne(req, res) {

        const { id, id_okr, id_user } = req.query;

        try {
            if (!!id) {
                const key = await conexao('keys').where({ "keys.id": id }).join("users", "users.id", "=", "keys.id_user").select("keys.*", "users.name").where('status', "<", 100).first();
                if (!!key) {
                    return res.json({ status: true, key })
                }
                return res.json({ status: false, mensage: "key com id não localizada" })
            }
            if (!!id_okr) {
                const key = await conexao('keys').where({ "keys.id_okr": id_okr }).join("users", "users.id", "=", "keys.id_user").select("keys.*", "users.name").where('status', "<", 100).first();
                if (!!key) {
                    return res.json({ status: true, key })
                }
                return res.json({ status: false, mensage: "key com id_okr não localizada" })
            }
            if (!!id_user) {
                let key = await conexao('keys').where({ "keys.id_user": id_user }).join("users", "users.id", "=", "keys.id_user").select("keys.*", "users.name");
                let key_serial = []
                if (!!key) {
                    for (let iterator of key) {
                        let okr = await conexao("okrs").where({ "okrs.id": iterator.id_okr }).first();
                        let criador = await conexao("users").where({ "users.id": okr.id_user }).first();
                        let image = await conexao("images").where({ "id": criador.id_image }).select("images.url").first()
                        criador = { ...criador, url: image?.url || "" }
                        let numkeys = await conexao("keys").where({ id_okr: okr.id })
                        okr = { ...okr, numkeys: numkeys.length, criador }
                        iterator = { ...iterator, okr }
                        key_serial.push(iterator)

                    }
                    key = key_serial;
                    return res.json({ status: true, key })
                }
                return res.json({ status: false, mensage: "key com id_user não localizada" })
            }

            return res.json({ status: false, mensage: "enviar id, id_okr ou id_user" })

        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro key=>getOne" })
        }
    },
    async keysgetTwu(req, res) {

        const { id_okr } = req.query;

        try {
            if (!!id_okr) {
                let keys = await conexao('keys').where({ id_okr }).join("users", "users.id", "=", "keys.id_user").select("users.name", "keys.*");




                return res.json({ status: true, keys })
            }
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "erro okr=>getTwu" })
        }
    },
    async keysdelete(req, res) {
        const { id } = req.query;
        try {
            await conexao("okrs").del().where({ id })
            return res.json({ status: true, mensage: "apagado" })
        } catch (error) {
            console.log(error);
            return res.json({ status: false, mensage: "error okr=>delete" })
        }
    },
}



