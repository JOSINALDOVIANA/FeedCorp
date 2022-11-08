import conexao from '../../database/connection.js';

export default {

    async insert(req, res) {
        let { id_user, title, validity = false, items, direction } = req.body;
        if (validity) {
            validity = new Date(validity)
        } else { validity = null }
        // // console.log(req.body)
        try {
            const ebr = await conexao("evaluation_by_results").insert({ title, id_user, validity });
            let items_serial = items.map((item) => ({ ...item, validity, id_ebr: ebr[0] }));
            await conexao("items").insert(items_serial)

            if (direction.company.length > 0) {
                let users = await conexao("users").where({ "id_company": direction.company[0] }).select("users.id")
                users = users.map(id_user => ({ id_ebr: ebr[0], "id_user": id_user.id }));
                await conexao("user_ebr").insert(users);
            }
            if (direction.units.length > 0) {
                let users = []
                for (const id_unit of direction.units) {
                    let users2 = await conexao("user_unit").join("users", "users.id", "=", "user_unit.id_user").where({ "user_unit.id_unit": id_unit }).select("users.id")
                    // users.push([]) 
                    users = [...users, ...users2];
                }
                if (users.length > 0) {
                    users = users.map(id_user => ({ id_ebr: ebr[0], id_user: id_user.id }));
                    await conexao("user_ebr").insert(users);
                }

            }
            if (direction.users.length > 0) {
                let users = direction.users;
                users.map(id_user => ({ id_ebr: ebr[0], id_user: id_user.id }));
                await conexao("user_ebr").insert(users);
            }
            res.json({ "status": true, "avpr": { id: ebr[0], id_user, title, validity, items: items_serial } });

        } catch (error) {
            // console.log(error)
            res.json({ status: false, erro: "error avpr_=>insert" });
        }
    },
    async update(req, res) {
        const { id, title, validity } = req.body;

        try {
            await conexao("evaluation_by_results").update({ title, validity }).where({ id });

            res.json({ "status": true, "message": "atualizado" });

        } catch (error) {
            // // console.log(error)
            res.json({ status: false, erro: "error avpr_=>update" });
        }
    },
    async delete(req, res) {
        const { id } = req.query;
        // // console.log(id)
        try {
            await conexao("evaluation_by_results").del().where({ id });

            return res.json({ "status": true, "message": "apagado" });

        } catch (error) {
            // console.log(error)
            return res.json({ status: false, erro: "error avpr_=>delete" });
        }
    },
    async getEspecific(req, res) {
        const { id } = req.query;

        try {
            let avaliação = await conexao("evaluation_by_results").where({ id }).first();
            let items = await conexao("items").where({ "id_ebr": id })
                .select("items.indicator", "items.goal", "items.max", "items.min", "items.id_physicalUnity", "items.id");
            let items_serial = [];
            for (const key in items) {
                let und = !items[key].und ? await conexao("physicalUnity").where({ id: items[key].id_physicalUnity }).first().select("physicalUnity.unity") : null
                let resposta = await conexao("item_answer_user").where({ "id_item": items[key].id })
                    .join("users", "item_answer_user.id_user", '=', "users.id")
                    .select("item_answer_user.answer", "users.name");
                items_serial.push({ ...items[key], resposta, und });
            }
            avaliação = { ...avaliação, items: items_serial }
            res.json({ "status": true, "avaliação": avaliação });

        } catch (error) {
            // console.log(error)
            res.json({ status: false, erro: "error avpr_=>getEspecific" });
        }
    },
    async getCreateAll(req, res) {
        const { id_user } = req.query;

        try {


            res.json({ "status": true, "avaliações": await conexao("evaluation_by_results").where({ id_user }) });

        } catch (error) {
            // console.log(error)
            res.json({ status: false, erro: "error avpr_=>getCreateAll" });
        }
    },
    async getAll(req, res) {
        const { id_user = false, id_direction = false ,id=false} = req.query
        //  // console.log(req.query)
        try {
            

            if (id) {
                let avprs = await conexao("evaluation_by_results").where({ id });
                for (let index in avprs) {
                    avprs[index].items = await conexao("items").where({ id_ebr: avprs[index].id })
                    avprs[index].paraquem = await conexao("user_ebr").where({ "user_ebr.id_ebr": avprs[index].id })
                        .join("users", "users.id", "=", "user_ebr.id_user")
                        // .join("images","images.id","=","users.id_image")  
                        .select("users.* ")
                    for (let key in avprs[index].items) {
                        avprs[index].items[key].resposta = await conexao("item_answer_user").where({ "item_answer_user.id_item": avprs[index].items[key].id })
                            .join("users", "item_answer_user.id_user", '=', "users.id")
                            .select("item_answer_user.*", "users.name", "users.id_image");
                            for (let key2 in avprs[index].items[key].resposta) {
                                avprs[index].items[key].resposta[key2].image= (await conexao("images").where({ "images.id": avprs[index].items[key].resposta[key2].id_image }).first().select("images.url"))?.url
                            }

                    }
                }
                return res.json({ "status": true, "avaliacoes": avprs });

            }
            if (id_user) {
                let avprs = await conexao("evaluation_by_results").where({ id_user });
                for (let index in avprs) {
                    avprs[index].items = await conexao("items").where({ id_ebr: avprs[index].id })
                    avprs[index].paraquem = await conexao("user_ebr").where({ "user_ebr.id_ebr": avprs[index].id })
                        .join("users", "users.id", "=", "user_ebr.id_user")
                        // .join("images","images.id","=","users.id_image")  
                        .select("users.* ")
                    for (let key in avprs[index].items) {
                        avprs[index].items[key].resposta = await conexao("item_answer_user").where({ "item_answer_user.id_item": avprs[index].items[key].id })
                            .join("users", "item_answer_user.id_user", '=', "users.id")
                            .select("item_answer_user.*", "users.name", "users.id_image");
                            for (let key2 in avprs[index].items[key].resposta) {
                                avprs[index].items[key].resposta[key2].image= (await conexao("images").where({ "images.id": avprs[index].items[key].resposta[key2].id_image }).first().select("images.url"))?.url
                            }

                    }
                }
                return res.json({ "status": true, "avaliacoes": avprs });

            }

            if (id_direction) {
                let avprs = await conexao("user_ebr").where({ "user_ebr.id_user": id_direction })
                    .join("evaluation_by_results", "user_ebr.id_ebr", "=", "evaluation_by_results.id")
                    .select("evaluation_by_results.*");
                if (avprs.length > 0) {
                    let avprs_serial = [];
                    let totalItems = 0;
                    let totalItemsResp = 0

                    for (let avpr of avprs) {
                        let items = await conexao("items").where({ "items.id_ebr": avpr.id });
                        let paraquem = await conexao("user_ebr").where({ "user_ebr.id_ebr": avpr.id })
                        .join("users", "users.id", "=", "user_ebr.id_user")
                        // .join("images","images.id","=","users.id_image")  
                        .select("users.* ")
                        for (let  index in paraquem) {
                            paraquem[index].image=(await conexao("images").where({id:paraquem[index].id_image}).first())?.url;
                            paraquem[index].respostas=[];
                        }
                        totalItems = items.length;
                        let items_serial = [];

                        for (let item of items) {

                            for (let index in paraquem) {
                                
                                paraquem[index].respostas=[...paraquem[index].respostas,{item,resp:await conexao("item_answer_user")
                                .where({ "item_answer_user.id_user": paraquem[index].id, "item_answer_user.id_item": item.id })
                                .first()}]
                            }

                            let M_resposta = await conexao("item_answer_user")
                                .where({ "item_answer_user.id_user": id_direction, "item_answer_user.id_item": item.id })
                                .first()
                            if (!!M_resposta) {
                                totalItemsResp += 1
                            }

                            items_serial.push({ ...item, M_resposta });

                        }

                        items = items_serial;
                        let concluded = totalItems == totalItemsResp ? true : false;
                        avpr = { ...avpr, items, totalItems, totalItemsResp, concluded,paraquem };

                        avprs_serial.push({ ...avpr })
                        totalItems = 0;
                        totalItemsResp = 0;

                    }

                    return res.json({ "status": true, "avaliacoes": avprs_serial });
                }
                return res.json({ "status": false, mensage: "Não foi localizado AV para este Usuario" });
            }

            return res.json({ "status": true, "avaliacoes": await conexao("evaluation_by_results") });

        } catch (error) {
            // console.log(error)
            return res.json({ "status": false, "mensage": "error avpr_=>getAll" });
            // return
        }
    },


    async insertItems(req, res) {
        const { id_ebr, goal, indicator, max = null, min = null, validity = new Date(), id_physicalUnity = null } = req.body;

        try {
            const ebr_items = await conexao("items").insert({ id_ebr, goal, indicator, max, min, validity, id_physicalUnity });

            res.json({ "status": true, "items": ebr_items });

        } catch (error) {
            // console.log(error)
            res.json({ status: false, erro: "error avpr_=>insertEbr_items" });
        }
    },
    async updateItems(req, res) {
        const { id, id_ebr, goal, indicator, max = null, min = null, validity = new Date(), id_physicalUnity = null } = req.body;

        try {
            await conexao("items").update({ goal, indicator, id_ebr, max, min, validity, id_physicalUnity }).where({ id })
            res.json({ "status": true, "message": "atualizado" });

        } catch (error) {

            res.json({ status: false, erro: "error avpr_=>updateitems" });
        }
    },
    async getItems(req, res) {
        const { id_ebr } = req.query;

        try {
            const ebr_items = await conexao("items").select("items.*").where({ id_ebr })
            res.json({ "status": true, ebr_items });

        } catch (error) {

            res.json({ status: false, erro: "error avpr_=>getitems" });
        }
    },
    async deleteItems(req, res) {
        const { id } = req.query;

        try {
            await conexao("items").del().where({ id })
            res.json({ "status": true, mensage: "apagado" });

        } catch (error) {

            res.json({ status: false, erro: "error avpr_=>deleteItems" });
        }
    },


    async insertItem_Answer_User(req, res) {
        const { id_user, id_item, answer } = req.body;

        try {
            const id = await conexao("item_answer_user").insert({ id_user, id_item, answer });
            return res.json({ status: true, mensage: "inserido" });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "erro avpr=>insertItem_Answer_User" });
        }
    },
    async updateItem_Answer_User(req, res) {
        const { id, id_user, id_item, answer,result } = req.body;

        try {
            await conexao("item_answer_user").update({ id_user, id_item, answer,result }).where({ id });
            return res.json({ status: true, mensage: "atualizado" });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "erro avpr=>updateItem_Answer_User" });
        }
    },
    async getItem_Answer_User(req, res) {
        const { id = false, id_user = false, id_item = false } = req.query;

        try {
            const respostas = !id ? !id_user ? await conexao("item_answer_user").where({ id_item }) : await conexao("item_answer_user").where({ id_user }) : await conexao("item_answer_user").where({ id })
            return res.json({ status: true, respostas });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "erro avpr=>getItem_Answer_User" });
        }
    },
    async deleteItem_Answer_User(req, res) {
        const { id } = req.query;

        try {
            await conexao("item_answer_user").del().where({ id })
            return res.json({ status: true, mensage: "deletado" });
        } catch (error) {
            // console.log(error)
            return res.json({ status: false, mensage: "erro avpr=>deleteItem_Answer_User" });
        }
    },




}