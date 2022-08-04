// DropContainer cria uma area onde pode-se clicar e jogar arquivos
// baseado nas props(isDragActive,isDragReject) passadas para esta div (DropContainer) ele ira mostrar verde ou vermelho
import styled,{css} from "styled-components";

// constantes
const CorMensagens={
    default:"#999",
    error:' #e578',
    sucess:'#78e5d5'
}
const dragActive=css`
border-color: #78e5d5;
`;
const dragReject=css`
border-color: #e578;

`;

// exportações
export const EnvioMenssagem=styled.p`
display: flex;
color: ${props=> CorMensagens[props.type||'default']};
justify-content: center;
align-items: center;
padding: 15px 0;
`;
export const DropContainer=styled.div.attrs({
    className:"dropzone"
})`
border: 1px dashed #DDD;
border-radius: 4px;
cursor: pointer;
transition: height 0.2s ease;

${props => props.isDragActive && dragActive}
${props => props.isDragReject && dragReject}

`;
