import ilustracao from '../../capturadetelade2022-02-0218-50-36.png'
import './imagem-estilo.css'
function Imagem(props){
 return(
  <img 
   className="image" 
   src={props.link}
   alt={props.alt} />
 )
}

export default Imagem