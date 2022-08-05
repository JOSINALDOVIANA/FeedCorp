import React from 'react';
import GlobalStyle from './styles/GlobalStyled.js';
import { Container, Content } from "./styles/ContainerStyled.js";
import BoxUpload from './componentes/Box/index.js';
import ListaArquivos from './componentes/ListaArquivos/index.js';
import { uniqueId } from 'lodash';
import fileSize from 'filesize';
import api from '../../api.js';


// =--------------INICIO DA FUNÇÃO------------------
function CarregarFotos({ImagensCarregadas, setImagens}) {

  const [ArquivosCarregados, setArquiCarregados] = React.useState([]);//sera preenchido com pelo useEfect com os dados de ImagensCarregadas 
  // -------------------------------------------------
  React.useEffect(() => {
    setArquiCarregados(ImagensCarregadas);
    return (() => null);
  }, [ImagensCarregadas])
  // -------------------------------------------------

  // -----------------RECEBENDO OS ARQUIVOS -------------
  function RealizarCarregamento(files) {
    // 1 - este IF limita eu carregar apenas uma imagem, remover ele caso queira uma lista de imagens carregadas
    if (ArquivosCarregados.length < 2) {
      // 2- criando um array de objetos com as imagens
      const uploadedFiles = files.map(file => ({
        file,
        id: uniqueId(),//definindo um id unico 
        name: file.name,
        readableSize: fileSize(file.size),
        preview: URL.createObjectURL(file), // criando um link para preview da foto carregada
        progress: 0,//sera modificado conforme o upload para a api
        uploaded: false,//quando finalizar o upload vai mudar para true para que possa ser mostrado os links de exclusao e preview
        error: false,//se for true no processo de upload sera exibido um aviso no front
        url: null,// sera usado para setar a variavel img no proprietario/index.js
      }))
      setImagens(a => ([...a, ...uploadedFiles]));// setando ImagensCarregadas em proprirtario/index.js



      uploadedFiles.forEach(processUploaded);// percorrendo a variavel e enviando os objetos para o processo de upload
    }

    return;

  }
  // -----------------FIM RECEBENDO OS ARQUIVOS ---------

// --------------ATUALIZANDO DADOS EM ImagensCarregadas---------
  function AtualizaArquivo(id, data) {
    // 1 - usnando a função que veio nas props para atualizar os dados
    setImagens(a => {
      //as funções do useState nos fornecem os dados anteriores sempre que as evocamos
      // em "a" tem todos os dados de ImagensCarregadas anteriormente
      // logo preciso apenas localizar qual arquivo possui o id recebido e anexar data a ele
      let b = a.map(el => (el.id === id ? { ...el, ...data } : el));// observe que se não for o elemento desejado não modifico 
      return b;// no return eu estou atualizando ImagensCarregadas com "b" que possui tudo atualizado
    })
  }
  // --------------FIM ATUALIZANDO DADOS EM ImagensCarregadas---------

  // ----------------PROCESSO DE ENVIO PARA API-----------------
  function processUploaded(file) {
    // 1 - estou criando um formulario com os dados para enviar para a api
    const data = new FormData();
    data.append('file', file.file, file.name);// estou passando um item com nome file,o priprio arquivo imagem,o nome do arquivo
    api.post('images/salvar', data, {
      //o axios me permite saber o andamento do processo de envio
      onUploadProgress: e => {
        //transformando este processo que vem porcentagem para um numero inteiro
        let progress = parseInt(Math.round((e.loaded * 100) / e.total));
        AtualizaArquivo(file.id, { progress });//agora vamos atualizar o progress que ja esta salvo em ImagensCarregadas em proprietario/index.js
      }
    }).then(r => {
      // quando finalizo o envio preciso novamente setar ImagensCarregadas com informações vindas da API
      AtualizaArquivo(file.id, {
        uploaded: true,
        id: r.data.id,        
        url: r.data.url,
        key: r.data.key,
        name: r.data.name,
        size: r.data.size,


      })
      // note que passei novamente um id e um objeto com cados à função AtualizaArquivo que realizara o que foi programada para fazer
    }).catch(() => {
      //e claro caso haja erro neste envio preciso reportar 
      AtualizaArquivo(file.id, {
        error: true,// isso informa um erro ao front
      })
    });
  }
// ----------------FIM PROCESSO DE ENVIO PARA API-----------------


  return (
    <Container>
      {/* vai criar uma div com display flex que ocupara toda a tela */}
      <Content>
        {/* vai exibir uma caixa branca em torno dos dos childrens(filhos) bem no centro da tela */}
        <BoxUpload RealizarCarregamento={RealizarCarregamento}></BoxUpload>
        {/* !!ArquivosCarregados.length vai me retornar false se length == 0 logo não mostrara a lista */}
        {
          !!ArquivosCarregados.length && <ListaArquivos ArquivosCarregados={ArquivosCarregados} setArquiCarregados={setArquiCarregados}></ListaArquivos>
        }

      </Content>
      <GlobalStyle />{/* stylo global */}


    </Container>

  );
}

export default CarregarFotos;
