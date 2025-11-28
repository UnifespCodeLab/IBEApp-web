import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
  }

  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>IBEApp</h1>
        <div>
          <label 
            style={{ whiteSpace: "pre-wrap" }}>
            Nome de Usuário / E-mail{"\n"}
          </label>
          <input
            type="email"
            placeholder="Seu nome de usuário ou e-mail"
            required
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label
            style={{ whiteSpace: "pre-wrap" }}>
            Senha{"\n"}
          </label>
          <input 
            type="password"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="recall-forget">
          <label>
            <a href="#">Esqueceu a senha?</a>
          </label>
        </div>

        <button
          //color="#FFF"
          //bgColor="#31788A"
          //_hover={{bg: '#31788A'}}
          //size="lg"
          //mt={4}
          //isLoading={loading}
          type="submit">
          Entrar
        </button>
      </form>
    </div>
  )
} 

export default Login;