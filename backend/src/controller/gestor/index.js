import conexao from "../../database/connection.js";

export default{
    async Cad(req,res){
        // const { nome, sobrenome, email, img, password, cat}=req.body;
        // console.log(req.body)
        // res.json({error:true})

        try {
            await conexao("gestor").insert(req.body);
            res.json({mensagem:"ok"})
        } catch (error) {
            console.log(error);
            res.json({error:true})
        }
    }
}