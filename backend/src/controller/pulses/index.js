import conexao from "../../database/connection.js";

export default{
    async Insert(req,res){
        let {id_user,id_company,title,questions=false,users=false,company=false,units=false}=req.body;
        try {
         const [ id ]=await  conexao("pulses").insert({id_user,id_company,title});

         if(!!questions){
            questions=questions.map(question=>({id_pulse:id,question}));
            await conexao("pulse_question").insert(questions);
         }

         if(!!users){
            users=users.map(user=>({id_pulse:id,id_user:user}));
            await conexao("pulpse_user").insert(users);
         }

         if(!!company){
            await conexao("pulse_company").insert({id_pulse:id,id_company:company})
         }

         if(!!units){
            units=units.map(unit=>({id_pulse:id,id_unity:unit}));
            await conexao("pulse_unity").insert(units);
         }

          return res.json({status:true,pulse:{
            id_user,id_company,title,questions,users,company,units
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
          let  pulsesCreateUser=await conexao("pulses").where({"pulses.id_user":id_user})
            // .join("pulse_question","pulse_question.id_pulse","=","pulses.id");
          for (const index in pulsesCreateUser) {
            let questions=await conexao("pulse_question").where({"id_pulse":pulsesCreateUser[index].id});
            for (let index2 in questions) {
                let users=await conexao("answer_user").where({"answer_user.id_question":questions[index2].id})
                .join("users","users.id","=","answer_user.id_user");
                questions[index2]={...questions[index2],users}; 
            }
            pulsesCreateUser[index]={...pulsesCreateUser[index],questions}
          }
            return res.json({pulsesCreateUser});
           
         }

        //  if(!!users){
        //     users=users.map(user=>({id_pulse:id,id_user:user}));
        //     await conexao("pulpse_user").insert(users);
        //  }

        //  if(!!company){
        //     await conexao("pulse_company").insert({id_pulse:id,id_company:company})
        //  }

        //  if(!!units){
        //     units=units.map(unit=>({id_pulse:id,id_unity:unit}));
        //     await conexao("pulse_unity").insert(units);
        //  }

        //   return res.json({status:true,pulse:{
        //     id_user,id_company,title,questions,users,company,units
        //   }})
        } catch (error) {
            console.log(error)
            return res.json({status:false,mensage:"error pulses=>insert"})
        }
    },

}