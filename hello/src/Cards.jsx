
import Titulo from './Titulo'
import Imagem from './Imagem'
import './Cards.css'
import Paragrafo from './Paragrafo'

function Cards(){
  return (
    <>
       <div className="card">
          <Titulo title="Senhora?" />
          <Paragrafo>Senhora? é um meme da Internet que surgiu a partir de uma entrevista de Edinair Maria dos Santos Moraes à TV Anhanguera, em 2015.</Paragrafo>
          <Imagem  image="https://claudia.abril.com.br/wp-content/uploads/2020/01/memes-3.jpg" />
          <hr />
       </div>
       <div className="card">
          <Titulo title="Nazaré Confusa" />
          <Paragrafo>O meme da Nazaré Confusa é geralmente usado quando alguém não entendeu direito o que está acontecendo.</Paragrafo>
          <Imagem  image="https://upload.wikimedia.org/wikipedia/pt/c/cd/Nazar%C3%A9_Confusa.jpg" />
          <hr />
       </div>
       <div className="card">
          <Titulo title="Ines brasil" />
          <Paragrafo>A carismática Inês Brasil não é propriamente um meme em si mesma, mas sua figura inusitada e estapafúrdia deu origem a um conjunto extenso de memes.</Paragrafo>
          <Imagem  image="https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2017/09/destaque-11.jpg" />
          <hr />
       </div>
       <div className="card">
          <Titulo title="Mônica" />
          <Paragrafo>Sabe o meme "ata"? Se você nunca usou a imagem da Mônica debochada na frente do computador, você está usando a internet errado!</Paragrafo>
          <Imagem  image="https://claudia.abril.com.br/wp-content/uploads/2020/01/meme-da-monica-origem-1.jpg" />
          <hr />
       </div>
     
 </>
  )
}
export default Cards
