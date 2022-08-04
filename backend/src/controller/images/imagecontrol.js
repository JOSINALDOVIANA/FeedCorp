
import crypto from 'crypto';
import aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import conexao from '../../database/connection.js';

const s3 = new aws.S3();

export default {
    async salvar(req, res, next) {

        // const dayName = new Array("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
        // const monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
        const { originalname: name, size, key, location: url = '' } = req.file;
        const id = `${crypto.randomBytes(12).toString('HEX')}-${name}`;

        try {
            await conexao('images').insert({
                id,
                name,
                size,
                key,
                url,

            });
            res.json({
                id, name, size, key, url
            });
        } catch (error) {
           // console.log(error)
            res.json({ error: true, mensagem: error });
        }

    },

    async deletar(req, res, next) {
        const { key, id } = req.query;
        try {

            await conexao('images').where({ id }).delete();
            if (process.env.STORAGE_TYPE === 's3') {

                s3.deleteObject({
                    Bucket: 'imagensjosinaldo',
                    Key: key,
                }, function (err, data) {
                    if (err) { console.log(err, err.stack) }

                })
                return res.status(200).json({ mensagem: true });
            }
            else {
                promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', key))
                return res.status(200).json({ mensagem:true });
            }
        } catch (error) {
            return res.json({mensagem:false});

        }

    },


    async listar(req, res, next) {
        const {nameuser=false,email=false}=req.query;
        //console.log(req.query)
        try {
            if (!nameuser && !email) {
            const { page = 1 } = req.query;
            const [contador] = await conexao('images').count();
            res.header('Total_fotos', contador['count(*)']);
            const dados=await conexao('images').select('*');
            const dados_serial=dados.map(ele=>({...ele,...{delete:`http://localhost:3001/images/deletar?key=${ele.key}&id=${ele.id}`}}))
            // .limit(6).offset((page - 1) * 6)
            return res.json(dados_serial);
            }else{
                if(!nameuser){
                   // console.log("!nameuser")
                    const dados=await conexao('users').select("images.*").where({email}).first().join("images","users.id_image","=","images.id");
                    if(dados){
                        return res.json({mensage:true,dados})
                    }
                    return res.json({mensagem:false})
                }
                if (!email) {
                    const dados=await conexao('users').select("images.*").where({nameuser}).join("images","users.id_image","=","images.id").first();
                   // console.log(dados)
                    if(!dados){
                        return res.json({mensagem:false})
                    }
                    return res.json({mensagem:true,dados})
                }
            }
           
        } catch (error) {
          //  console.log(error)
            return res.json({error:true,message:error})
        }

    }
}
