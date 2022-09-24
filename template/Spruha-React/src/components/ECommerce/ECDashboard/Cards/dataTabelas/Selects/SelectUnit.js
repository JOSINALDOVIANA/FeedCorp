import React, { useEffect, useState } from 'react';
import Multiselect from "react-select";

export const SelectUnit = ({ units, setFeedback }) => {
  const [units_serial, setUnits] = useState([]);
  useEffect(() => {
    setUnits(units)
  }, [units])


  const objectArray = units_serial?.map(unit => ({ value: unit.id, label: unit.initials }))
  // [
  //     { value: "Marcus", label: "Marcus" },
  //     { value: "Josinaldo", label: "Josinaldo " },
  //   ];

  return (
    <div>
      <Multiselect classNamePrefix="Select2" onChange={(e) => {
        setFeedback(a => ({ ...a, unitSelect: (units.filter(unit => unit.id == e.value))[0] }));
        setFeedback(a => ({ ...a, id_unity: e.value, users: a.unitSelect.Colaboradores }));

      }} options={objectArray} singleSelect displayValue="key" placeholder="Unidade" />
    </div>
  );
};

//SELECT DE UNIDADES DO CLIMA PULSO
export const SelectUnitPulso = ({ units, setPulse }) => {
  const [units_serial, setUnits_serial] = useState([]);
  useEffect(() => {
    setUnits_serial(units)
  }, [units])


  const objectArray = units_serial?.map(unit => ({ value: unit.id, label: unit.initials }))
  // [
  //     { value: "Marcus", label: "Marcus" },
  //     { value: "Josinaldo", label: "Josinaldo " },
  //   ];

  return (
    <div>
      <Multiselect id="selectUnits" classNamePrefix="Select2" onChange={(e) => {
        setPulse(a => ({ ...a, unitSelect: [...a.unitSelect,...units.filter(unit=>unit.id==e.value)]}));
        setPulse(a => ({ ...a, unitSelect: a.unitSelect.filter((este, i) => a.unitSelect.indexOf(este) === i)}));
        
        // (units.filter(unit => unit.id == e.value))[0] }))
        // setPulse(a => ({ ...a, id_unity: e.value, users: a.unitSelect.Colaboradores }));
        
      }} options={objectArray} singleSelect displayValue="key" placeholder="Unidade" />
    </div>
  );
};