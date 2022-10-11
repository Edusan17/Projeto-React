import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static" style={{ backgroundColor: 'black' }}>
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
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;