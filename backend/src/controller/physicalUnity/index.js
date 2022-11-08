import conexao from "../../database/connection.js";

export default{
    async insert(req,res){
        const {unity}=req.body;
        try {
            const id=await conexao("physicalUnity").insert({unity});
            return res.json({status:true,dados:{id:id[0],unity}})
        } catch (error) {
            // console.log(error)
            return res.json({status:false,mensage:"erro physicalUnity=>insert"})
        }
    },
    async update(req,res){
        const {id,unity}=req.body;
        try {
            await conexao("physicalUnity").update({unity}).where({id});
            return res.json({status:true,dados:{id,unity}})
        } catch (error) {
            // console.log(error)
            return res.json({status:false,mensage:"erro physicalUnity=>update"})
        }
    },
    async delete(req,res){
        const {id}=req.body;
        try {
            await conexao("physicalUnity").del().where({id});
            return res.json({status:true,mensage:"deletado"})
        } catch (error) {
            // console.log(error)
            return res.json({status:false,mensage:"erro physicalUnity=>delete"})
        }
    },
    async get(req,res){
        const {id=false}=req.query;
        try {
            const physicalUnity = !id?await conexao("physicalUnity"):await conexao("physicalUnity").where({id});
            return res.json({status:true,physicalUnity})
        } catch (error) {
            // console.log(error)
            return res.json({status:false,mensage:"erro physicalUnity=>delete"})
        }
    },
}