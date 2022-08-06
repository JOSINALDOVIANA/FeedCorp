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
    async get_avpr_Col(req,res){
        const {col_idcol}=req.query;

        try {
            const avprs=await conexao("apr_com_col")
            .join("tb_apr","tb_apr.idtb_apr","=","apr_com_col.id_tb_apr").where("apr_com_col.col_idcol",col_idcol);
            
            res.json(avprs)
            
        } catch (error) {
           // console.log(error)
            res.json([]);
        }
    },
    async get_metas_avpr(req,res){
        const {id_tb_apr}=req.query;

        try {
            
            const perguntas=await conexao("tb_apr_metas").where({id_tb_apr}).select("idtb_metas","indicador","meta");
            
            
            res.json(perguntas)
            
        } catch (error) {
           // console.log(error)
            res.json([]);
        }
    },
    async get_result_col(req,res){
        const {col_idcol,idtb_apr}=req.body;

        try {
            let id_metas=await conexao("tb_apr_metas").where({"id_tb_apr":idtb_apr}).select("idtb_metas");
            id_metas=id_metas.map(item=>(item.idtb_metas));
            // console.log(id_metas)
             const respostas=await conexao("tb_apr_result").where({col_idcol}).whereIn("id_tb_metas",id_metas);
           
            
            res.json(respostas)
            
        } catch (error) {
           // console.log(error)
            res.json([]);
        }
    },
    async get_gest_avpr(req,res){
         const {id_gestor_apr}=req.body;
       try {
        conexao("tb_apr").where({id_gestor_apr}).then((r)=>{
            res.json(r);
          })
       } catch (error) {
          // console.log(error);
           res.json({error:true})
       }
        
       
        
    },
    async get_QT_responderam_avpr(req,res){
          const {idtb_apr}=req.body;
          const [contador]=await conexao("tb_apr_result").countDistinct("col_idcol").where({"id_tb_apr":idtb_apr});

        //   console.log(count[0]);
           res.json(contador["count(distinct `col_idcol`)"]);
    },

    async post_avpr_col(req,res){
        const {
            idtb_apr,
            idcol,
            metas,
            respostas
        }=req.body;

       const  resp_serial=respostas.map((item,index)=>({
            "id_tb_apr":idtb_apr,
            "col_idcol":idcol,
            "resp":item,
            "id_tb_metas":metas[index]
        }))
      
      try {
        await conexao("tb_apr_result").insert(resp_serial); 
        res.json({mensagem:"ok"});
      } catch (error) {
         // console.log(error)
          res.json({error:true})
      }
        
    },
    async post_avpr_gestor(req,res){
        const {
            idgestor,            
            metas,
            indicadores,
            titulo,
            cols,
        }=req.body;      
      try {
          const id_tb_apr=await conexao("tb_apr").insert({
              titulo,
              "id_gestor_apr":idgestor
          });
         const metas_serial=metas.map((item,index)=>({
             "indicador":indicadores[index],
             "meta":item,
             "id_tb_apr":id_tb_apr[0],
             
         }))

         await conexao("tb_apr_metas").insert(metas_serial);

         const cols_serial=cols.map((item,index)=>({
             "id_tb_apr":id_tb_apr[0],
             "col_idcol":item
         }))

         await conexao("apr_com_col").insert(cols_serial);
        
        res.json({mensagem:"ok"});
      } catch (error) {
         // console.log(error)
          res.json({error:true})
      }
        
    },


}