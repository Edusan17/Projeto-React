import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar variant="dense" space-between>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h3" color="inherit" className='txt7'>
                            <img src="https://www.seekpng.com/png/full/435-4350179_tekken-logo-tekken-4.png" alt="" className="logoTekken" />
                        </Typography>
                    </Box>
                    <Grid container justifyContent="flex-end">
                        <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none textos'>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className='txt7'>
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/posts' className='text-decorator-none textos'>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className="txt7">
                                Historias
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none textos'>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className="txt7">
                                Personagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='formularioTema' className='text-decorator-none textos'>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className="txt7">
                                Jogos
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit" >
                                    <Button className='btn-login txt7' variant='contained'>logout</Button>
                                </Typography>
                        </Box>
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;