import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import "./Home.css";
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Aproveite o site e procure coisas sobre o mundo Tekken.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://sm.ign.com/ign_de/news/t/tekken-8-t/tekken-8-the-exclusive-first-interview-with-katsuhiro-harada_wj55.jpg" alt="" width="670px" height="450px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;