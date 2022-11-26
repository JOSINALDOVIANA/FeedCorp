import conexao from "../../database/connection.js";

export default {
    async Insert(req, res) {
        let {

            name_user,
            surname_user,
            email_user,
            phone_user,

            name_companie,
            cnpj_companie,
            postcard_companie,
            address_companie,
            phone_companie,
            district_companie,


            id_state=null,
            id_country=null,
            id_city=null,
            id_plan=null,
        } = req.body
console.log(req.body)
        try {
            let [id] = await conexao("contact").insert({
                name_user,
                surname_user,
                email_user,
                phone_user,

                name_companie,
                cnpj_companie,
                postcard_companie,
                address_companie,
                phone_companie,

                district_companie,


                id_state,
                id_country,
                id_city,
                id_plan,
            });
            return res.json({
                status: true,
                id,
                name_user,
                surname_user,
                email_user,
                phone_user,

                name_companie,
                cnpj_companie,
                postcard_companie,
                address_companie,
                phone_companie,

                district_companie,


                id_state,
                id_country,
                id_city,
                id_plan,
            })
        } catch (error) {
            console.log(error)
            return res.json({ status: false, mensage: "error contact=insert" })
        }
    },
    async Select(req,res){

        try {
            let solicitacoes=await conexao("contact");
            console.log(solicitacoes)
            for (const key in solicitacoes) {
                solicitacoes[key].city=await conexao("cities").where({"id":solicitacoes[key].id_city}).first();
                solicitacoes[key].state=await conexao("states").where({"id":solicitacoes[key].id_state}).first();
                solicitacoes[key].country=await conexao("countries").where({"id":solicitacoes[key].id_country}).first();
                solicitacoes[key].plan=await conexao("plans").where({"id":solicitacoes[key].id_plan}).first();
                if(!!solicitacoes[key].plan){
                    solicitacoes[key].plan.modules=await conexao("module_plan").where({"module_plan.id_plan":solicitacoes[key].plan.id})
                    .join("modules","modules.id","=","module_plan.id_module").select("modules.module");
                }
            }
            return res.json({status:true,solicitacoes});
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"error contact=>select"})
        }
    }
}