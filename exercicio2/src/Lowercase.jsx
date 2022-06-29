function LowerCase(props) {
 const textoInserido = props.text
 const textoFormatado = textoInserido.toLowerCase()

  return (
    <p className="text">{textoFormatado}</p>
  )
}

export default LowerCase