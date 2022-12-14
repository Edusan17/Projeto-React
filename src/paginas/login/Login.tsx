import React, { useState, useEffect, ChangeEvent } from "react";
import "./Login.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
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
      dispatch(addToken(token));
      history('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      await login('/usuarios/logar', userLogin, setToken)

      toast.success('Usuário logado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    }catch(error){
      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    }
  }
  return (
    <>
      <Grid
        container className="imagem-login "
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
              <Link className='text-decorator-none' to='/cadastrousuario'>
                <Typography variant='subtitle1' gutterBottom align='center' className='colorcad text-decorator-none'>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className='fundo'>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
