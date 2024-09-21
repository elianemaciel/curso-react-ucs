import { Password } from "@mui/icons-material";
import { Container, Input, TextField } from "@mui/joy";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface ICadastroPageProps {}

export const CadastroPage: React.FC<ICadastroPageProps> = (props) => {
  const [state , setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfim: ''
  });
  const [errorPassword, setErrorPassword] = useState<boolean>(false)

  const handleValidatePassword = (value: string) => {
    setState({ ...state, passwordConfim: value })
    if (value !== state.password) {
      setErrorPassword(true)
    } else {
      setErrorPassword(false)
    }
  }

  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  }

  return (
    <main>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite o nome do usuário"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Digite o email do usuário"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Digite a senha"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Confirme a senha"
            value={state.passwordConfim}
            error={errorPassword}
            onChange={(e) => handleValidatePassword(e.target.value)}
          />
          {errorPassword ?
          <span style={{ color: 'red'}}>As senhas não são iguais.</span>
          : null}
          <button type={'submit'}>Salvar</button>
        </form>
      </Container>
    </main>
  );
};
