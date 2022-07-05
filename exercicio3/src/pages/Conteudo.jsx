import Titulo from '../components/Titulo/Titulo'
import Imagem from '../components/imagem/Imagem'
import Paragrafo from '../components/paragrafo/Paragrafo'

function Conteudo(){
  return(
    <>
    <h1>3 Projetos criados após a Reprograma </h1>
    < Titulo texto="Projeto Formulário" />
    <Paragrafo>Fomulário responsivo</Paragrafo>
    < Imagem 
    link="https://github.com/MayaraRocha95/formulario-responsivo/raw/main/img/paginanormal.png"
    alt="fomulário"
    />
    
    < Titulo texto="Projeto Site Pousada"/>
   <Paragrafo>Site para treinar o CSS com o tema Pousada</Paragrafo> 
    < Imagem  
    link="https://github.com/MayaraRocha95/side-de-pousada/raw/main/assets/header.png"
    alt="Site Pousada"  
    />
       
    < Titulo texto="Projeto Jogo da Cobrinha"/>
    <Paragrafo>Jogo da cobrinha feito com JavaScript puro</Paragrafo>
    < Imagem 
    link="https://github.com/MayaraRocha95/JogodaCobrinha/raw/main/img/snakegame.png"
    alt="imagem do jogo"
    />
     
    </>
  )
}

export default Conteudo