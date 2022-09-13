import React, { useEffect, useState } from 'react';
import Multiselect from "react-select";

export const SelectUnit = ({units,setFeedback}) => {
  const [units_serial,setUnits]=useState([]);
  useEffect(()=>{
   setUnits(units)
  },[units])
 
 
  const objectArray = units_serial?.map(unit=>({value:unit.id,label:unit.initials}))
  // [
  //     { value: "Marcus", label: "Marcus" },
  //     { value: "Josinaldo", label: "Josinaldo " },
  //   ];
    
  return (
    <div>
      <Multiselect classNamePrefix="Select2" onChange={(e)=>{
        setFeedback(a=>({...a,unitSelect:(units.filter(unit=>unit.id==e.value))[0]}));
        setFeedback(a=>({...a,id_unit:e.value}));
    }} options={objectArray} singleSelect displayValue="key" placeholder="Unidade" />
    </div>
  );
};