import conexao from '../../database/connection.js';

export default {
    async Insert(req, resp) {

        const { units, id_user,id_company } = req.body; //units=[string,string], id_user=int

        const unit_serial = units.map(unit => ({ description: unit.description, initials: unit.initials, id_user,id_company }));
        try {
            await conexao("units").insert(unit_serial)
            resp.json({ status: true, message: "dados salvos" });
        } catch (error) {

            resp.json({ status: false, message: "error: unit-create" });
        }
    },

    async update(req, resp) {

        const { description, id,initials } = req.body; //units=string, id_unit=int       
        try {
            await conexao("units").update({ description,initials }).where({  id })
            resp.json({ status: true, message: "dados alterados" });
        } catch (error) {
            resp.json({ status: false, message: "error: unit-update" });
        }
    },


    async getUnitCreateUser(req, res) {
        const { id_user = false, id_company = false } = req.query; // id_user=int
        // se nao vier id_user vai ser retonado todas
        try {
            if (id_user) {
                const units = await conexao("units").select("units.id", "units.description", "units.initials").where({ id_user });
                let units_serialised = [];


                for (let i = 0; i < units.length; i++) {
                    let Colaboradores = await conexao("user_unit").where({ "id_unit": units[i].id }).join("users", "users.id", "=", "user_unit.id_user").select("users.*")
                    let colaboradores_serial=[];
                    for (let iterator of Colaboradores) {
                        let image = await conexao("images").where({id:iterator.id_image}).first().select("images.url");
                        colaboradores_serial.push({...iterator,image});
                    }
                    Colaboradores=colaboradores_serial;
                    const [contador] = await conexao("user_unit").where({ "id_unit": units[i].id }).count().join("users", "users.id", "=", "user_unit.id_user");
                    units_serialised[i] = { ...units[i],
                         cols: contador['count(*)'], 
                         Colaboradores };
                }

                return res.json(units_serialised)
            }
            if (id_company) {
                const units = await conexao("units").select("units.id", "units.description", "units.initials").where({ id_company });
                let units_serialised = [];


                for (let i = 0; i < units.length; i++) {
                    const Colaboradores = await conexao("user_unit").where({ "id_unit": units[i].id }).join("users", "users.id", "=", "user_unit.id_user").select("users.id", "users.id_image", "users.email", "users.name")
                    const [contador] = await conexao("user_unit").where({ "id_unit": units[i].id }).count().join("users", "users.id", "=", "user_unit.id_user");
                    units_serialised[i] = { ...units[i], cols: contador['count(*)'], Colaboradores };
                    
                }

                return res.json(units_serialised)
            }
            return res.json({ status: true, units: await conexao('units') })
        } catch (error) {
            console.log(error)
            res.json({ error: true, message: error.sqlMessage });
        }
    },
    async getAll(req, res) {

        const { id = false, id_user = false,id_company=false } = req.query
        try {
            if (id) {
                let unit = await conexao("units").where({ id }).first();
                let users = await conexao("user_unit").where({ "user_unit.id_unit": id })
                    .join('users', "users.id", "=", "user_unit.id_user")
                    // .join("images", "images.id", "=", "users.id_image")
                    .join("permissions","permissions.id","=","users.id_permission")
                    // .join("positions","users.id_office","=","positions.id")
                    .select("users.*","permissions.description as permission")
                    for (const key2 in users) {
                        let url= await conexao("images").where({id:users[key2].id_image}).first().select("images.url")
                        let cargo=await conexao("positions").where({id:users[key2].id_office}).first()
                        users[key2]={...users[key2],url:url?.url,cargo}
                    }
                    
                return res.json({ status: true, units: { ...unit, users } })
            }
            if (id_user) {
                let units = await conexao("units").where({ id_user });

                for (const key in units) {
                    let users = await conexao("user_unit").where({ "user_unit.id_unit": units[key].id })
                        .join('users', "users.id", "=", "user_unit.id_user")
                        // .join("images", "images.id", "=", "users.id_image")
                        .join("permissions","permissions.id","=","users.id_permission")
                        .select("users.*","permissions.description as permission")

                    for (const key2 in users) {
                        let url= await conexao("images").where({id:users[key2].id_image}).first().select("images.url")
                        users[key2]={...users[key2],url:url?.url}
                    }

                    units[key] = { ...units[key], users }
                }
                return res.json({ status: true, units})
            }
            if (id_company) {
                let company=await conexao("companies").where({id:id_company }).first();
                let units = await conexao("units").where({ id_company });

                for (const key in units) {
                    let users = await conexao("user_unit").where({ "user_unit.id_unit": units[key].id })
                        .join('users', "users.id", "=", "user_unit.id_user")
                        // .join("images", "images.id", "=", "users.id_image")
                        .join("permissions","permissions.id","=","users.id_permission")
                        .select("users.*","permissions.description as permission")

                    for (const key2 in users) {
                        let url= await conexao("images").where({id:users[key2].id_image}).first().select("images.url")
                        users[key2]={...users[key2],url:url?.url}
                    }

                    units[key] = { ...units[key], users }
                }
                return res.json({ status: true, units,company})
            }


            return res.json({ status: true, units: await conexao("units") })
        }
        catch (error) {
            console.log(error)
            return res.json({ error: true, message: error.sqlMessage });
        }
    },


    async delete(req, res) {
        const { id_user, id } = req.query;
        try {
            const del = await conexao("units").del().where({ id_user, id });

            return res.json({ status: true, message: "unidade apagada" });
        } catch (error) {
            res.json({ status: false, message: "error unit-delete" });
        }
    }
}