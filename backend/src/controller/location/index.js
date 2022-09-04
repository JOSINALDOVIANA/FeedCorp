import conexao from "../../database/connection.js";

export default {
    async insertCountry(req,res){
        const {country}=req.body;
        try {
            const id = await conexao("countries").insert({country});
            return res.json({status:true,country:{id:id[0],country}})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro insertCountry"})
        }
    },
    async deleteCountry(req,res){
        const {id}=req.body;
        try {
            await conexao("countries").del().where({id});
            return res.json({status:true,mensage:"apagado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro deleteCountry"})
        }
    },
    async updateCountry(req,res){
        const {id,country}=req.body;
        try {
            await conexao("countries").update({country}).where({id});
            return res.json({status:true,mensage:"atualizado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro updateCountry"})
        }
    },
    async getCountry(req,res){
        const {id}=req.query;
        try {
            const country=!id?await conexao("countries"):await conexao("countries").where({id});
            return res.json({status:true,country})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro getCountry"})
        }
    },
    async insertState(req,res){
        const {id_country,state,initials}=req.body;
        try {
            const id = await conexao("states").insert({state,initials,id_country});
            return res.json({status:true,state:{id:id[0],state}})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro insertState"})
        }
    },
    async deleteState(req,res){
        const {id}=req.body;
        try {
            await conexao("states").del().where({id});
            return res.json({status:true,mensage:"apagado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro deleteState"})
        }
    },
    async updateState(req,res){
        const {id,state,initials,id_country}=req.body;
        try {
            await conexao("states").update({state,id_country,initials}).where({id});
            return res.json({status:true,mensage:"atualizado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro updateState"})
        }
    },
    async getState(req,res){
        const {id,id_country}=req.query;
        try {
            if(!!id_country){
                return res.json({status:true,states:await conexao("states").where({id_country})})
            }
            const states=!id?await conexao("states"):await conexao("states").where({id});
            return res.json({status:true,states})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro getState"})
        }
    },
    async insertCity(req,res){
        const {city,id_state}=req.body;
        try {
            const id = await conexao("cities").insert({city,id_state});
            return res.json({status:true,city:{id:id[0],city}})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro insertCity"})
        }
    },
    async deleteCity(req,res){
        const {id}=req.body;
        try {
            await conexao("cities").del().where({id});
            return res.json({status:true,mensage:"apagado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro deleteCity"})
        }
    },
    async updateCity(req,res){
        const {id,city,updated_at,id_state}=req.body;
        console.log(req.body)
        try {
            await conexao("cities").update({city,updated_at,id_state}).where({id});
            return res.json({status:true,mensage:"atualizado"})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro updateCity"})
        }
    },
    async getCity(req,res){
        const {id,id_state}=req.query;
        try {
            if(!!id_state){
                return res.json({status:true,cities:await conexao("cities").where({id_state})})
            }
            const cities=!id?await conexao("cities"):await conexao("cities").where({id});
            return res.json({status:true,cities})
        } catch (error) {
            console.log(error);
            return res.json({status:false,mensage:"erro getCity"})
        }
    },
}