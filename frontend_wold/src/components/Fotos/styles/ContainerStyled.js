
//  vai criar um Container que ocupará toda a pagina disponivel e vai centralizar e alinhar os itens dentro
//  content vai criar uma div branca, responsiva. obs: so aparece se algo for passado como filho(children)
import styled from "styled-components";

export const Container=styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Content=styled.div`
width: 100%;
max-width: 400px;
margin: 30px;
background: #FFFF;
border-radius: 4px;
padding: 20px;
`;
