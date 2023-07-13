import React from 'react';

const Membro = (props) => {
  return (
    <div>
      <Dados username={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social facebook={props.facebook} linkedin={props.linkedin} youtube={props.youtube}/>
      <hr/>
    </div>
  );
}

const Social = (link) => {
  return (
    <div>
      <a href={link.facebook}>Facebook</a>
      <br/>
      <a href={link.linkedin}>Linkedin</a>
      <br/>
      <a href={link.youtube}>Youtube</a>
    </div>
  )
}

const Dados = (info) => {
  return (
    <div>
      <h2>Olá sou o(a) {info.username}</h2>
      <h3>Cargo: {info.cargo}</h3>
      <h3>Idade: {info.idade}</h3>
    </div>
  );
}

function App() {
  return(
    <div>
      <h1>Conheça a nossa equipe:</h1>
      <Membro nome="Samuel" cargo="Programador" idade="23" facebook="https://www.facebook.com/samuel.thomas.5439087" linkedin="https://www.linkedin.com/in/samuelt005/" youtube="https://www.youtube.com/"/>
      <Membro nome="Amanda" cargo="Dsigner" idade="41"/>
      <Membro nome="Matheus" cargo="P.O." idade="47"/>

    </div>
  );
}

export default App;