import conexao from "../../database/connection.js";

export default{
    async Cad(req,res){
        const { nome, sobrenome, email, img, password, cat}=req.body;
     

        try {
            await conexao("adm").insert({
                nome,sobrenome,email,img,password,cat
            });
            res.json({mensagem:"ok"})
        } catch (error) {
            console.log(error);
            res.json({error:true})
        }
    },
    async Del(req,res){
        const {password,idadm}=req.body;
     

        try {
            await conexao("adm").del().where({idadm,password})
            res.json({mensagem:"ok"})
        } catch (error) {
            console.log(error);
            res.json({error:true})
        }
    },
}