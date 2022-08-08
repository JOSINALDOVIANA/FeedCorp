import React from 'react';
import { UseDados } from '../../routes';


// import { Container } from './styles';

const Administador = () => {
const [values,setValues]=UseDados();

  return (
    values?.units?.map(und=>(<ul key={und.id}>
      {und.description}
      {und.Colaboradores?.map(col=>(<li key={col.id}>{col.name}</li>))}
      </ul>))
  );
}

export default Administador;