import { Grid, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="facebook.com.br" target="_blank">
                                    <FacebookIcon className='redes' />
                                </a>
                                <a href="https://www.instagram.com/duuh_sanx/" target="_blank">
                                    <InstagramIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/in/eduardo-cordeiro-dos-santos-31a4291a1/" target="_blank">
                                    <LinkedInIcon className='redes' />
                                </a>
                            </Box>
                            </Box>
                        </Box>
                        <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                            </Box>
                            <Box>
                                <a target="_blank" href="https://github.com/Edusan17">
                                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">github.com/Edusan17</Typography>
                                </a>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;