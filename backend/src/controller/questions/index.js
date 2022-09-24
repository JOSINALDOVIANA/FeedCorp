import conexao from "../../database/connection.js"

export default {
    async Get(req, res) {
        try {
            return res.json({ status: true, questions: await conexao("bdquestions") })
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "erro questions=>get" })
        }
    },
    async Insert(req, res) {
        let { questions } = req.body;
        try {
            // questions=questions.map(question=>({question}));
            await conexao("bdquestions").insert(questions);
            return res.json({ status: true, mensage: "dados inseridos" })
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "erro questions=>insert" })
        }
    },
    async Update(req, res) {
        let { questions } = req.body;
        try {
            questions = questions.map(({ id, question }) => ({ id, question }));
            for (const iterator of questions) {
                await conexao("bdquestions").update({ question: iterator.question }).where({ id: iterator.id })
            }

            return res.json({ status: true, mensage: "dados inseridos" })
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "erro questions=>update" })
        }
    },
    async Delete(req, res) {
        let { ids } = req.body;
        try {

            for (const iterator of ids) {
                await conexao("bdquestions").del().where({ id: iterator })
            }

            return res.json({ status: true, mensage: "dados pagados" })
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "erro questions=>delete" })
        }
    },
    async categoryQuestionInsert(req, res) {
        let { categories } = req.body;
        try {
            categories = categories.map(category => ({ category }))
            await conexao("categoryquestion").insert(categories);

            return res.json({ status: true, mensage: "dados salvos" })
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "erro questions.categoryquestion=>delete" })
        }
    },
    async categoryQuestionGet(req, res) {
        let { id = false } = req.query;
        try {
            if (!!id) {
                const categorias = await conexao("categoryquestion").where({ id });
                let categorias_serial = []
                for (let iterator of categorias) {
                    let questions = await conexao("bdquestions").where({id_cat:iterator.id});
                    console.log(questions)
                    categorias_serial.push({ ...iterator, questions });
                }

                return res.json({ status: true, categories: categorias_serial })
            }
            
            const categorias = await conexao("categoryquestion");
            let categorias_serial = []
            for (let iterator of categorias) {
                let questions = await conexao("bdquestions").where({id_cat:iterator.id});
                console.log(questions)
                categorias_serial.push({ ...iterator, questions });
            }
            return res.json({ status: true, categories: categorias_serial })


        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "erro questions.categoryquestionget=>delete" })
        }
    },
}