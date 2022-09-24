import React, { useEffect, useState } from 'react';
import Multiselect from "react-select";
import api from '../../../../../../api';

export const SelecTypes = ({ values, setFeedback }) => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    api.get(`/typesfeedbacks/get`).then(r => {
      setFeedback(a => ({ ...a, types: r.data.types }));
      setTypes(r.data.types)
    })
  }, [values])


  const objectArray = types?.map(type => ({ value: type.id, label: type.type }))
  // [
  //     { value: "Marcus", label: "Marcus" },
  //     { value: "Josinaldo", label: "Josinaldo " },
  //   ];

  return (
    <div>
      <Multiselect classNamePrefix="Select2" onChange={(e) => {
        setFeedback(a => ({ ...a, typeSelect: (types.filter(type => type.id == e.value))[0] }));
        setFeedback(a => ({ ...a, id_type: e.value }));
      }} options={objectArray} singleSelect displayValue="key" placeholder="Categoria" />
    </div>
  );
};