import conexao from "../../database/connection.js";

export default{
    async Insert(req,res){
        let {id_user,id_company,title,questions=false,users=false,company=false,units=false}=req.body;
        try {
         const [ id ]=await  conexao("pulses").insert({id_user,id_company,title});

         if(!!questions){
            questions=questions.map(question=>({id_pulse:id,question}));

            questions.length>0?await conexao("pulse_question").insert(questions):null
         }

         if(!!users){
            users=users.map(user=>({id_pulse:id,id_user:user}));
            users.length>0?await conexao("pulpse_user").insert(users):null
         }

         if(!!company){
            await conexao("pulse_company").insert({id_pulse:id,id_company:company})
         }

         if(!!units){
            units=units.map(unit=>({id_pulse:id,id_unity:unit}));
            units.length>0?await conexao("pulse_unity").insert(units):null
         }

          return res.json({status:true,pulse:{
            id,id_user,id_company,title,questions,users,company,units
          }})
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"error pulses=>insert"})
        }
    },
    async Get(req,res){
        let {id_user=false,id_company=false,id_unit=false}=req.query;
        try {        

         if(!!id_user){
          // pulsos que o usuario criou
          let  pulsesCreateUser=await conexao("pulses").where({"pulses.id_user":id_user})
          
          // Pulsos direcionados ao usuario
          let  pulsesDirectUser=await conexao("pulse_user").where({"pulse_user.id_user":id_user})
          .join("pulses","pulse_user.id_pulse","=","pulses.id")
          .select("pulses.*");
          
          // dados do usuario
          let mydados=await conexao("users").where({"users.id":id_user})
          .first()
          
          
          let myUnit = await conexao("user_unit").join("units","units.id","=","user_unit.id_unit")
          .where({"user_unit.id_user":id_user})
          .select("units.*")
          .first();

          // pulsos da companhia
          let pulsescompany=await conexao("pulse_company").where({"pulse_company.id_company":mydados.id_company})
          .join("pulses","pulse_company.id_pulse","=","pulses.id")
          .select("pulses.*");

          let pulsesunit=[];
          // pulsos da unidade
            if(!!myUnit){
              pulsesunit=await conexao("pulse_unity").where({"pulse_unity.id_unity":myUnit.id})
              .join("pulses","pulse_unity.id_pulse","=","pulses.id")
              .select("pulses.*");
            }

          pulsesDirectUser=[...pulsesDirectUser,...pulsescompany,...pulsesunit] // juntando todos
          pulsesDirectUser=pulsesDirectUser.filter(item=>{return item.id_user != id_user}); // filtrando os que o usuario criou
          pulsesDirectUser=pulsesDirectUser.filter((este, i) => pulsesDirectUser.indexOf(este) === i);//tirando duplicatas

          for (const index in pulsesCreateUser) {
            let mediapulse=0;
            let totalpulse=0;
            let questions=await conexao("pulse_question").where({"id_pulse":pulsesCreateUser[index].id});
            for (let index2 in questions) {
                let users_resp=await conexao("answer_user").where({"answer_user.id_question":questions[index2].id})
                .join("users","users.id","=","answer_user.id_user").join("images","users.id_image","=","images.id")
                .select("users.*","images.url","answer_user.status","answer_user.answer");
                let total=0;
                let media=0;
                if(users_resp.length>0){
                  for (const iterator of users_resp) {
                    total=total+iterator.answer;
                  }
                  media=total/users_resp.length
                }
                questions[index2]={...questions[index2],users_resp,media};
                totalpulse=total+media; 
            }
            mediapulse=totalpulse/questions.length;
            pulsesCreateUser[index]={...pulsesCreateUser[index],questions,media:mediapulse}
          }

          for (const index in pulsesDirectUser) {
            let questions=await conexao("pulse_question").where({"id_pulse":pulsesDirectUser[index].id});
            for (let index2 in questions) {
                let resp=await conexao("answer_user").where({"answer_user.id_question":questions[index2].id,"answer_user.id_user":id_user})                
                .select("answer_user.status","answer_user.answer");
                questions[index2]={...questions[index2],resp:resp[0]}; 
            }
            pulsesDirectUser[index]={...pulsesDirectUser[index],questions}
          }

         
            return res.json({status:true,pulsesCreateUser,pulsesDirectUser});           
         }

         if(!!id_company){
          let  pulsesCompany=await conexao("pulses").where({"pulses.id_company":id_company})
            
          for (const index in pulsesCompany) {
            let questions=await conexao("pulse_question").where({"id_pulse":pulsesCompany[index].id});
            for (let index2 in questions) {
                let users=await conexao("answer_user").where({"answer_user.id_question":questions[index2].id})
                .join("users","users.id","=","answer_user.id_user").join("images","users.id_image","=","images.id")
                .select("users.*","images.url","answer_user.answer","answer_user.status");
                questions[index2]={...questions[index2],users}; 
            }
            pulsesCompany[index]={...pulsesCompany[index],questions}
          }
            return res.json({status:true,pulsesCompany});           
         }

         if(!!id_unit){
          let pulsesUnit=await conexao("pulse_unity")
          .join("pulses","pulses.id","=","pulse_unity.id_pulse").where({"pulse_unity.id_unity":id_unit})
          .select("pulses.*");
          for (const index in pulsesUnit) {
            let questions=await conexao("pulse_question").where({"id_pulse":pulsesUnit[index].id});
            for (let index2 in questions) {
                let users=await conexao("answer_user").where({"answer_user.id_question":questions[index2].id})
                .join("users","users.id","=","answer_user.id_user").join("images","users.id_image","=","images.id")
                .select("users.*","images.url","answer_user.answer","answer_user.status");
                questions[index2]={...questions[index2],users}; 
            }
            pulsesUnit[index]={...pulsesUnit[index],questions}
          }
            return res.json({status:true,pulsesUnit});           
         }         
         
       

        return res.json({status:false,pulses:await conexao("pulses")})
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"error pulses=>get"})
        }
    },
    async Delete(req,res){
        let {id}=req.query;
        try { 
          await conexao("pulses").del().where({id})      

         return res.json({status:true,mensage:"apagado"})
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"error pulses=>delete"})
        }
    },
    async answer_userInsert(req,res){
        let {id_user,resp}=req.body;
        try { 
          resp=resp.map(({id_question,answer})=>({id_user,id_question,answer}));
          await conexao("answer_user").insert(resp)      

         return res.json({status:true,answer:resp})
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"error pulses.answer_user=>insert"})
        }
    },


}