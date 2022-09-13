import React, { useEffect, useState } from 'react';
import Multiselect from "react-select";

export const SelectUsers = ({users,setFeedback}) => {
  const [users_serial,setUsers]=useState([]);
  useEffect(()=>{
   setUsers(users)
  },[users])
 
 
  const objectArray = users_serial?.map(user=>({value:user.id,label:user.name}))
  // [
  //     { value: "Marcus", label: "Marcus" },
  //     { value: "Josinaldo", label: "Josinaldo " },
  //   ];
    
  return (
    <div>
      <Multiselect classNamePrefix="Select2" onChange={(e)=>{
        setFeedback(a=>({...a,userSelect:(users.filter(user=>user.id==e.value))[0]}));
        setFeedback(a=>({...a,id_direction:e.value}));
    }} options={objectArray} singleSelect displayValue="key" placeholder="Colaborador" />
    </div>
  );
};