import React, { useEffect, useState } from 'react';
import Multiselect from "react-select";
import api from '../../../../../api';

export const SelectDBQuestions = () => {
  const [objectArray,setObject]=useState([]);
  useEffect(()=>{
   api.get(`/questions/category_question/get`).then(r=>{
    let obj=r.data.categories.map(({id,category})=>({value:id,label:category}))
    setObject(obj);
   })
  },[])
 
 
  // const objectArray = units_serial?.map(unit=>({value:unit.id,label:unit.initials}))
  // const objectArray =
  // [
  //     { value: "Bem-estar", label: "Bem-estar" },
  //     { value: "Produtividade", label: "Produtividade " },
  //     { value: "Conectividade com líderes e colegas", label: "Conectividade com líderes e colegas " },
  //   ];
    
  return (
    <div>
      <Multiselect classNamePrefix="Select2" onChange={(e)=>{
        // setFeedback(a=>({...a,unitSelect:(units.filter(unit=>unit.id==e.value))[0]}));
        // setFeedback(a=>({...a,id_unity:e.value,users:a.unitSelect.Colaboradores}));
        
    }} options={objectArray} singleSelect displayValue="key" placeholder="Qual é a categoria?" />
    </div>
  );
};