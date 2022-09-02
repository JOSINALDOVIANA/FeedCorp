import conexao from '../../database/connection.js';

export default {

    async insert(req,res){
        const {id_user,title,validity,items}=req.body;

        try {
             const avpr =  await conexao("evaluation_by_results").insert({title,id_user,validity}) ;      
             let items_serial=items.map((item)=>({...item,validity,id_ebr:avpr[0]}));
             await conexao("items").insert(items_serial)
            
            res.json({"status":true,"avprID":avpr});
            
        } catch (error) {
           console.log(error)
            res.json({status:false, erro:"error avpr_=>insert"});
        }
    },
    async update(req,res){
        const {id,title,validity}=req.body;

        try {
             await conexao("evaluation_by_results").update({title,validity}).where({id}) ;      
            
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
    async getEspecific(req,res){
        const {id}=req.query;

        try {
                let avaliação=await conexao("evaluation_by_results").where({id}).first();
                let items = await conexao("items").where({"id_ebr":id})
                .select("items.indicator","items.goal","items.max","items.min","items.id_physicalUnity","items.id");
                let items_serial=[];
                for (const key in items) {
                    let und=!items[key].und?await conexao("physicalUnity").where({id:items[key].id_physicalUnity}).first().select("physicalUnity.unity"):null
                    let resposta=await conexao("item_answer_user").where({"id_item":items[key].id})
                    .join("users","item_answer_user.id_user",'=',"users.id")
                    .select("item_answer_user.answer","users.name");
                    items_serial.push({...items[key],resposta,und});
                }
                avaliação={...avaliação,perguntas:items_serial}
            res.json({"status":true,"avaliação":avaliação});
            
        } catch (error) {
           console.log(error)
            res.json({status:false, erro:"error avpr_=>getEspecific"});
        }
    },
    async getCreateAll(req,res){
        const {id_user}=req.query;

        try {
                
            
            res.json({"status":true,"avaliações":await conexao("evaluation_by_results").where({id_user})});
            
        } catch (error) {
           console.log(error)
            res.json({status:false, erro:"error avpr_=>getCreateAll"});
        }
    },
    async getAll(req,res){
       

        try {
                
            
            res.json({"status":true,"avaliações":await conexao("evaluation_by_results")});
            
        } catch (error) {
           console.log(error)
            res.json({status:false, erro:"error avpr_=>getCreateAll"});
        }
    },

    async insertItems(req,res){
        const {id_ebr,goal,indicator,max=null,min=null,validity=new Date(),id_physicalUnity=null}=req.body;

        try {
             const ebr_items =  await conexao("items").insert({id_ebr,goal,indicator,max,min,validity,id_physicalUnity});      
            
            res.json({"status":true,"items":ebr_items});
            
        } catch (error) {
           console.log(error)
            res.json({status:false, erro:"error avpr_=>insertEbr_items"});
        }
    },
    async updateItems(req,res){
        const {id,id_ebr,goal,indicator,max=null,min=null,validity=new Date(),id_physicalUnity=null}=req.body;

        try {
              await conexao("items").update({goal,indicator,id_ebr,max,min,validity,id_physicalUnity}).where({id})
            res.json({"status":true,"message":"atualizado"});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>updateitems"});
        }
    },
    async getItems(req,res){
        const {id_ebr}=req.query;

        try {
             const ebr_items =  await conexao("items").select("items.*").where({id_ebr})
            res.json({"status":true,ebr_items});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>getitems"});
        }
    },
    async deleteItems(req,res){
        const {id}=req.query;

        try {
             await conexao("items").del().where({id})
            res.json({"status":true,mensage:"apagado"});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>delete_items"});
        }
    },
    async setAnswer(req,res){
        const {id_user,}=req.query;

        try {
             const ebr_items =  await conexao("ebr_items").select("ebr_items.indicator","ebr_items.goal").where({id_ebr})
            res.json({"status":true,ebr_items});
            
        } catch (error) {
           
            res.json({status:false, erro:"error avpr_=>getEbr_items"});
        }
    },
    async insertItem_Answer_User(req,res){
        const {id_user,id_item,answer}=req.body;

        try {
           const id=await conexao("item_answer_user").insert({id_user,id_item,answer});
           return res.json({status:true,mensage:"inserido"});
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"erro avpr=>insertItem_Answer_User"});
        }
    },
    async updateItem_Answer_User(req,res){
        const {id,id_user,id_item,answer}=req.body;

        try {
           await conexao("item_answer_user").update({id_user,id_item,answer}).where({id});
           return res.json({status:true,mensage:"atualizado"});
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"erro avpr=>updateItem_Answer_User"});
        }
    },
    async getItem_Answer_User(req,res){
        const {id}=req.body;

        try {
           
           return res.json({status:true,resposta:await conexao("item_answer_user").where({id})});
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"erro avpr=>updateItem_Answer_User"});
        }
    },




}