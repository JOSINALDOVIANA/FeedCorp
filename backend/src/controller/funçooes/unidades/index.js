import conexao from "../../../database/connection.js";

export default {
    async criate(req,resp){
        const {descri,id_adm}=req.body;

        try {
           const und=await conexao("unidades").insert({
                descri,
                id_adm
            })
            resp.json({
                id:und[0],
                descri
            });
        } catch (error) {
            console.log(error)
            resp.json({error:true})
        }
    }
}