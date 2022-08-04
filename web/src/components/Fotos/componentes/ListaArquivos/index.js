import React from 'react';
import { Container, FileInfo, Preview } from '../../styles/ListaStyled.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from "react-icons/md"


// ------------INICIO DA FUNÇÃO---------------------
function ListaArquivos({ ArquivosCarregados}) {
    //poderia apenas mostrar ArquivosCarregados que é = ImagensCarregadas la do proprietario/index.js
    // mas eu não teria a possibilidade de visualizar na tela todas as imagens carregadas em tempo de execusão
    //logo faz-se necessario o uso do rook useState

    const [files, setFiles] = React.useState([]);// contante inicial e necessaria
    // -----------------------------------------
    React.useEffect(() => {
        setFiles(ArquivosCarregados);// vai atualizar files

        return (() => null)
        //obs: vai executar sempre que ArquivosCarregados mudar, como ArquivosCarregados=ImagensCarregada,
        //  vai manter a lista sempre atualizada
    }, [ArquivosCarregados]);
    // ----------------------------------------
    return (
        <Container>
            {
                files.map(file => (
                    <li key={file.id}>
                        <FileInfo>
                            <Preview src={file.preview}> </Preview>
                            <div>
                                <strong>
                                    {file.name}
                                </strong>
                                <span>
                                    {file.readableSize}
                                    {/* {!!file.url && <button onClick={async() => {
try {
    await api.delete(`/fotos/deletarQ?id_foto=${file.id}&key=${file.key}`).then(resposta=>{
        if (!resposta.data.error) {
            setArquiCarregados(a=>{
                let b=[];
                a.map(ele=>{
                   if(ele.id===file.id){
                     return null ;
                   }
                   b.push(ele)
                   return null;
                })
                return b;
            }); 
            return;
        }
        alert(resposta.data.mensagem);
        return;
    });
    
} catch (error) {
    alert("não é possivel apagar ")
}
                             }}>excluir</button>} */}
                                </span>
                            </div>
                        </FileInfo>
                        <div>
                            {!file.uploaded && !file.error && <CircularProgressbar
                                styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
                                value={file.progress}
                                text={`${file.progress}%`}
                            />}
                            {file.url && <a href={file.url} target="_blank" rel="noopener noreferrer">
                                <MdLink style={{ marginRight: 8 }} size={24} color='#222'></MdLink>
                            </a>}
                            {file.uploaded && <MdCheckCircle size={24} color='#78e5d5'></MdCheckCircle>}
                            {file.error && <MdError size={24} color='#e578'></MdError>}

                        </div>
                    </li>
                ))
            }
        </Container>
    );
}

export default ListaArquivos;