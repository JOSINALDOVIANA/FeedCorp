import React, { useEffect, useState } from 'react';
import api from '../api';

// import { Container } from './styles';

function Images() {
    const [images,setImages]=useState([])
    const [recal,setRecal]=useState(false)
    useEffect(()=>{
     api.get(`images/listar?nameuser=&email=`).then(r=>{
        setImages(r.data);
     })
    },[])

    useEffect(()=>{
        api.get(`images/listar?nameuser=&email=`).then(r=>{
            setImages(r.data);
         }) 
    },[recal])
  return (
    <div>
        {images.map(image=>(
        <div key={image.id}>
            <img src={image.url} alt={image.name} style={{width:"100px",height:"100px"}}/>
            <button onClick={()=>{
                api.delete(`images/deletar?key=${image.key}&id=${image.id}`).then(r=>{
                    if(r.data.mensagem ){setRecal(a=>!a)}
                })
            }}>apagar</button>
        </div>
        ))}
    </div>
  );
}

export default Images;