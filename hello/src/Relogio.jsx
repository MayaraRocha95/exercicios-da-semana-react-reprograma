function Relogio(){
 const horario = new Date().toLocaleDateString()
 return(
  <h2>{horario}</h2>
 )
}

export default Relogio