import React, { useState, useEffect, ChangeEvent } from "react";
import "./Login.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Box } from "@mui/material";

function Login() {
  let history = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome:'',
      usuario: '',
      senha: '',
      foto: '',
      token: ''
    }
  )

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value

    })
  }

  useEffect(()=>{
    if (token != ''){
      history('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      await login('/usuarios/logar', userLogin, setToken)

      alert('Usuário logado com sucesso!!!');
    }catch(error){
      alert('Dados do Usuário inconsistentes. Erro ao logar!!!')
    }
  }
  return (
    <>
      <Grid
        container className="fundo"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} alignItems="center">
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                component="h3"
                align="center"
                className='textos'
              >
                Entrar
              </Typography>
              <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="Usuário"
                placeholder="Entre com seu usuário" className='textos2'
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="Senha"
                className='textos2'
                name="senha"
                margin="normal"
                type="password"
                placeholder="Entre com sua senha"
                fullWidth
              />
              <Box marginTop={2} textAlign='center'>
                  <Button type='submit' variant='contained' className="btn-login">
                    Logar
                  </Button>
              </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center' className='textos'>
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to='/cadastrousuario'>
                <Typography variant='subtitle1' gutterBottom align='center' className='textos'>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>

        </Grid>
        <Grid xs={6} className='imagem-login'>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
