function Uppercase(props) {
  const textoInserido = props.text
  const textoFormatado = textoInserido.toUpperCase()

  return (
    <p className="text">{textoFormatado}</p>
  )
}

export default Uppercase