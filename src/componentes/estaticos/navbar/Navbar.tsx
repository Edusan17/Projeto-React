import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar variant="dense" space-between>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h3" color="inherit" className='txt7'>
                            TEKKEN
                        </Typography>
                    </Box>
                    <Grid container justifyContent="flex-end">
                        <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className='txt6'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className="txt7">
                                Historias
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className="txt7">
                                Personagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit" className="txt7">
                                Jogos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='/login' className='text-decorator-none'>
                                <Typography variant="h6" color="inherit" >
                                    <Button className='btn-login txt7' variant='contained'>logout</Button>
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;