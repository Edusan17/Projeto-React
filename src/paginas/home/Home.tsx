import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

function Home() {
    
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }}>
                <Grid alignItems="center" item xs={5}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Aproveite o site e procure coisas sobre o mundo Tekken.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#660606", color: "white" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={7} >
                    <img src="https://i.imgur.com/8FxCpmd.jpg" alt="" width="780px" height="470px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                <TabPostagem />
                </Grid>
                </Grid>
            
        </>
    );
}

export default Home;
