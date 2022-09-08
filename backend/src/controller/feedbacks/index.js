import conexao from "../../database/connection.js";

export default{
    async insert(req,res){
      const   {
        id_user=null,
        id_unity=null,
        feedback, //obrigatorio
        id_company, //obrigatorio
        id_direction=null,
        id_type,//obrigatorio
        updated_at=new Date(),
        anonymous=false
      }=req.body;
      try {
        const id= await conexao("feedbacks").insert({id_user,id_unity,feedback,id_company,id_direction,id_type,updated_at,anonymous});
        return res.json({
            status:true,
            feedback:{id_user,id_unity,feedback,id_company,id_direction,id_type,updated_at,id:id[0]}
        })
      } catch (error) {
        console.log(error)
        return res.json({status:false,mensage:"error feedback=>insert"});
      }
    },
    async update(req,res){
      const   {id,id_user=null,id_unity=null,feedback,id_company,id_direction=null,id_type,anonymous=false}=req.body;
      try {
        await conexao("feedbacks").update({id_user,id_unity,feedback,id_company,id_direction,id_type,anonymous}).where({id});
        return res.json({
            status:true,
            mensage:"atualizado"
        })
      } catch (error) {
        console.log(error)
        return res.json({status:false,mensage:"error feedback=>update"});
      }
    },
    async get(req,res){
      const   {id=false,id_user=false,id_unity=false,id_company=false,id_type=false,id_direction=false}=req.query;
      
      
      try {
        let feedbacks;
        if(id){
          feedbacks =await conexao("feedbacks").where({id});
        }
        if(id_user){
          feedbacks =await conexao("feedbacks").where({id_user});
        }
        if(id_unity){
          feedbacks =await conexao("feedbacks").where({id_unity});
        }
        if(id_company){
          feedbacks =await conexao("feedbacks").where({id_company});
        }
        if(id_direction){
          feedbacks =await conexao("feedbacks").where({id_direction});
        }
        if(id_type){
          feedbacks =await conexao("feedbacks").where({id_type});
        }
        
        return res.json({
            status:true,
            feedbacks
        })
      } catch (error) {
        console.log(error)
        return res.json({status:false,mensage:"error feedback=>get"});
      }
    },
    async delete(req,res){
      const   {id}=req.bory;
      
      
      try {
        conexao("feedbacks").del().where({id})
        return res.json({
            status:true,
            mensage:"apagado"
        })
      } catch (error) {
        console.log(error)
        return res.json({status:false,mensage:"error feedback=>delete"});
      }
    },
    async typesInsert(req,res){
          let {types}=req.body
          try {
            types=types.map(item=>({"type":item}))
            await conexao("typesfeedbacks").insert(types);
            return res.json({status:true,mensage:"salvos"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error types=>insert"})
          }
    },
    async typesUpdate(req,res){
          let {id,type}=req.body
          try {
           
            await conexao("typesfeedbacks").update(type).where({id});
            return res.json({status:true,mensage:"atualizado"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error types=>update"})
          }
    },
    async typesDelete(req,res){
          let {id}=req.body
          try {
           
            await conexao("typesfeedbacks").del().where({id});
            return res.json({status:true,mensage:"apagado"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error types=>delete"})
          }
    },
    async typesGet(req,res){
          let {id}=req.query
          try {
           
           const type=await conexao("typesfeedbacks").where({id});
            return res.json({status:true,type});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error types=>get"})
          }
    },
    async answersGet(req,res){
          let {id=false,id_user=false}=req.query
          try {
            let respostas;
            if(id){
              respostas=await conexao("answers").where({id});              
            }           
            if(id_user){
              respostas=await conexao("answers").where({id_user});              
            }           
            return res.json({status:true,respostas});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error answers=>get"})
          }
    },
    async answersInsert(req,res){
          let {id_user,answer,anonymous=false,id_feedback}=req.body
          try {
            const id=await conexao("answers").insert({id_user,anonymous,answer});
            await conexao("feedback_answer").insert({id_answer:id[0],id_feedback});
            return res.json({status:true,answer:{id:id[0],id_user,answer,anonymous}});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error answers=>insert"})
          }
    },
    async answersDelete(req,res){
          let {id}=req.body
          try {
            await conexao("answers").del().where({id});
            
            return res.json({status:true,mensage:"deletado"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error answers=>delete"})
          }
    },
    async answersUpdate(req,res){
          let {id,id_user,answer,anonymous=false}=req.body
          try {
            const id=await conexao("answers").update({id_user,anonymous,answer}).where({id});
            
            return res.json({status:true,mensage:"atualizado"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error answers=>update"})
          }
    },
    async FA_Insert(req,res){
          let {id_feedback,id_answer}=req.body
          try {
            const id=await conexao("feedback_answer").insert({id_answer,id_feedback});
            
            return res.json({status:true,feedback_answer:{id:id[0],id_answer,id_feedback}});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error feedback_answer=>insert"})
          }
    },
    async FA_Update(req,res){
          let {id,id_feedback,id_answer}=req.body;
          try {
            await conexao("feedback_answer").update({id_answer,id_feedback}).where({id});
            
            return res.json({status:true,mensage:"atualizado"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error feedback_answer=>update"})
          }
    },
    async FA_Get(req,res){
          let {id=false,id_feedback=false,id_answer=false}=req.query
          try {
            let resposta;
            if(id){
             resposta= await conexao("feedback_answer").where({id});
            }
            if(id_answer){
             resposta= await conexao("feedback_answer").where({id_answer});
            }
            if(id_feedback){
             resposta= await conexao("feedback_answer").where({id_feedback});
            }
            
            return res.json({status:true,resposta});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error feedback_answer=>get"})
          }
    },
    async FA_Delete(req,res){
          let {id}=req.body
          try {
            await conexao("answers").del().where({id});            
            return res.json({status:true,mensage:"deletado"});
          } catch (error) {
            console.error(error)
            return res.json({status:false,mensage:"error feedback_answer=>delete"})
          }
    },
}