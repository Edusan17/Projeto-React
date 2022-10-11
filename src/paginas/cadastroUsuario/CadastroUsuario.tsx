import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    useEffect(() => {
        if (userResult.id != 0) {
            history("/login")
        }
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro', {
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
        <Grid container className="fundo2" direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className='colortxt'
                        >
                            Cadastrar
                        </Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome"
                            placeholder="Entre com seu nome"
                            name="nome"
                            margin="normal"
                            fullWidth
                            className='textos3 textos'
                            variant="outlined"
                        />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="Usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            placeholder="Entre com seu usuario"
                            className='textos3 textos'
                            fullWidth
                        />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="foto"
                            label="Foto"
                            variant="outlined"
                            name="foto"
                            margin="normal"
                            placeholder="Entre com sua foto"
                            className='textos3 textos'
                            fullWidth
                        />

                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            placeholder="Entre com sua senha"
                            className='textos3 textos'
                            fullWidth
                        />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="Confirmar senha"
                            variant="outlined"
                            name="confirmarSenha"
                            margin="normal"
                            type="password"
                            placeholder="Entre com sua senha novamente"
                            className='textos3 textos'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' className="btn-login1 btnCancelar ">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className="btn-login">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;
