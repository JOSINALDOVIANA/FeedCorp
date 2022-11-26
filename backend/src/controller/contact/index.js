import conexao from "../../database/connection";

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


            id_state,
            id_country,
            id_city,
            id_plan,
        } = req.body

        try {
            let id = await conexao("contact").insert({
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
            return res.json({ status: false, mensage: "error contact=insert" })
        }
    },
    async Select(req,res){

        try {
            return res.json({status:true,solicitações:await conexao("contact")});
        } catch (error) {
            return res.json({status:false,mensage:"error contact=>select"})
        }
    }
}