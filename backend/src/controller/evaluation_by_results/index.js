import conexao from '../../database/connection.js';

export default {

    async insert(req,res){
        const {id_user,title}=req.body;

        try {
             const avpr =  await conexao("evaluation_by_results").insert({title,id_user}) ;      
            
            res.json({"status":true,"avprID":avpr});
            
        } catch (error) {
           // console.log(error)
            res.json({status:false, erro:"error avpr_=>insert"});
        }
    },
    async update(req,res){
        const {id,title}=req.body;

        try {
             await conexao("evaluation_by_results").update({title}).where({id}) ;      
            
            res.json({"status":true,"message":"atualizado"});
            
        } catch (error) {
           // console.log(error)
            res.json({status:false, erro:"error avpr_=>update"});
        }
    },
    async delete(req,res){
        const {id}=req.body;

        try {
             await conexao("evaluation_by_results").del({title}).where({id}) ;      
            
            res.json({"status":true,"message":"apagado"});
            
        } catch (error) {
           // console.log(error)
            res.json({status:false, erro:"error avpr_=>delete"});
        }
    },
    async insertEbr_results(req,res){
        const {id_user,id_ebr,answer,id_ebr_items}=req.body;

        try {
             const ebr_results =  await conexao("ebr_results").insert({answer,id_user,id_ebr,id_ebr_items}) ;      
            
            res.json({"status":true,"ebr_results_id":ebr_results});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>insertEbr_results"});
        }
    },
    async updateEbr_results(req,res){
        const {id,answer}=req.body;

        try {
             const ebr_results =  await conexao("ebr_results").update({answer}).where({id});
            res.json({"status":true,"message":"atualizado"});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>updateEbr_results"});
        }
    },
    async getEbr_results(req,res){
        const {id_ebr_items,id_user,id_ebr}=req.query;

        try {
             const ebr_results =  await conexao("ebr_results").where({id_ebr,id_ebr_items,id_user}).select("ebr_results.answer");
            res.json({"status":true,"message":"atualizado"});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>updateEbr_results"});
        }
    },
    async insertEbr_items(req,res){
        const {id_ebr,goal,indicator}=req.body;

        try {
             const ebr_items =  await conexao("ebr_results").insert({id_ebr,goal,indicator});      
            
            res.json({"status":true,"ebr_items_id":ebr_items});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>insertEbr_items"});
        }
    },
    async updateEbr_items(req,res){
        const {id,goal,indicator}=req.body;

        try {
              await conexao("ebr_items").update({goal,indicator}).where({id})
            res.json({"status":true,"message":"atualizado"});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>updateEbr_items"});
        }
    },
    async getEbr_items(req,res){
        const {id_ebr}=req.query;

        try {
             const ebr_items =  await conexao("ebr_items").select("ebr_items.indicator","ebr_items.goal").where({id_ebr})
            res.json({"status":true,ebr_items});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>getEbr_items"});
        }
    },




 




}