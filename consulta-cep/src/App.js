import './App.css';
import {useState} from "react";

function App() {

    const [endereco, setEndereco] = useState({});

    function manipularEndereco(evento) {

        const cep = evento.target.value;

        setEndereco({
            cep
        })

        if (cep && cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => resposta.json())
                .then(dados => {

                    if (dados.bairro === "") {
                        dados.bairro = "Sem bairro"
                    }

                    if (dados.logradouro === "") {
                        dados.logradouro = "Sem rua"
                    }

                    setEndereco(enderecoAntigo => {
                            return {
                                ...enderecoAntigo,
                                rua: dados.logradouro,
                                bairro: dados.bairro,
                                cidade: dados.localidade,
                                estado: dados.uf
                            }
                        }
                    )
                })
        }
    }

    return (
        <div className="App container">
            <input placeholder="Digite o CEP" className="cep" onChange={manipularEndereco}/>
            <p>CEP: {endereco.cep}</p>
            <p>Rua: {endereco.rua}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.cidade}</p>
            <p>Estado: {endereco.estado}</p>
        </div>
    );
}

export default App;
