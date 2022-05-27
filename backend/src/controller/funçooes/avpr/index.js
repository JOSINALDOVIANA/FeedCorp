import conexao from "../../../database/connection.js";

export default {
    async get_avpr_Col(req,res){
        const {col_idcol}=req.body;

        try {
            const avprs=await conexao("apr_com_col")
            .join("tb_apr","tb_apr.idtb_apr","=","apr_com_col.id_tb_apr").where("apr_com_col.col_idcol",col_idcol);
            
            res.json(avprs)
            
        } catch (error) {
            console.log(error)
            res.json([]);
        }
    },
    async get_metas_avpr(req,res){
        const {id_tb_apr}=req.body;

        try {
            
            const perguntas=await conexao("tb_apr_metas").where({id_tb_apr}).select("idtb_metas","indicador","meta");
            
            
            res.json(perguntas)
            
        } catch (error) {
            console.log(error)
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
            console.log(error)
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
           console.log(error);
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
          console.log(error)
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
          console.log(error)
          res.json({error:true})
      }
        
    },


}