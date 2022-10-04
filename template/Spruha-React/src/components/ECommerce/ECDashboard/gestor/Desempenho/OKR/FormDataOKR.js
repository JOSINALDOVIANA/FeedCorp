import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Multiselect from "react-select";
import styled from "styled-components";
import { useDropzone, } from "react-dropzone";
import { DropzoneAreaBase, DropzoneArea, DropzoneDialog } from "material-ui-dropzone";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AttachFile, Audiotrack, Description, PictureAsPdf, Theaters } from "@material-ui/icons";

export const SelectPessoaUnidade = ({ unit_select, setOkr }) => {
  const [unit, setUnit] = useState({});
  useEffect(() => {
    if (!!unit_select) {
      setUnit(unit_select[0])
    }
  }, [unit_select])

  const objectArray = unit?.Colaboradores?.map(col => ({ value: col.id, label: col.name }))

  return (
    <div>
      <Multiselect noOptionsMessage={() => 'Sem opções'} classNamePrefix="Select2" onChange={(e) => { setOkr(a => ({ ...a, user: unit.Colaboradores.filter(col => col.id == e.value) })) }} options={objectArray} singleSelect displayValue="key" placeholder="Integrante" />
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