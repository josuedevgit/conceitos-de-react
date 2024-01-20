function Pessoa({url, nome, idade, profissao}) {
    return(
        <div>
            <img src={url} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;