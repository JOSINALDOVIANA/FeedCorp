import React from 'react';
import Dropzone from 'react-dropzone';
import {DropContainer,EnvioMenssagem} from '../../styles/DropZonesStyled.js';


function Box(props) {
    // vai mudar a mensagem e cor do texto 
    function MostrarMensagem(isDragActive,isDragReject){
        if(isDragReject){
            return <EnvioMenssagem type="error">Formato de arquivo incorreto...</EnvioMenssagem>
        }
        if(!isDragActive){
            return <EnvioMenssagem>Clic ou solte aqui os arquivos...</EnvioMenssagem>
        }
        
            return <EnvioMenssagem type="sucess">Solte aqui os arquivos...</EnvioMenssagem>
        
    }
    //   vai criar a area onde pode-se clicar e jogar arquivos
  return (
      <Dropzone acceptedFlies="image/*" onDropAccepted={props.RealizarCarregamento}>
          {({getRootProps,getInputProps,isDragActive,isDragReject})=>(
              <DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                  <input {...getInputProps()}></input>
                  {MostrarMensagem(isDragActive,isDragReject)}
              </DropContainer>
          )}
      </Dropzone>
  );
}

export default Box;