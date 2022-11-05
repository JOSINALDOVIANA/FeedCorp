import React, { useEffect, useState } from "react";
import api from "../../../../../../../api.js";
import Multiselect from "react-select";


export const SelectPessoaUnidade = ({ unit_select, setOkr }) => {
  const [unit, setUnit] = useState({});
  useEffect(() => {
    api.get(`/unit/getAll?id=${unit_select?.id}`).then(r => {
      console.log(r.data)
      setUnit(r.data.units);
    })
  }, [unit_select])
// console.log(unit_select)
// console.log(unit)

  const objectArray = unit?.users?.map(col => ({ value: col.id, label: col.name }))

  return (
    <div>
      <Multiselect noOptionsMessage={() => 'Sem opções'} classNamePrefix="Select2" 
      onChange={(e) => { setOkr(a => ({ ...a, user: unit?.users?.filter(col => Number(col.id) === Number(e.value)) })) }} 
      options={objectArray} singleSelect displayValue="key" placeholder="Integrante" />
    </div>
  );
};

// export const SingleselectUnidade = ({ units, setOkr }) => {
//   // console.log(units)
//   const objectArray = units?.map(und => ({ value: und.id, label: und.initials }))
//   // [
//   //   { value: "UMC", label: "UMC" },
//   //   { value: "UTIC", label: "UTIC " },
//   // ];
//   return (
//     <div>
//       <Multiselect classNamePrefix="Select2" onChange={(e) => { setOkr(a => ({ ...a, unit: units.filter(und => und.id == e.value) })) }} options={objectArray} singleSelect displayValue="key" placeholder="Unidade" />
//     </div>
//   );
// };