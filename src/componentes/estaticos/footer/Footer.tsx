import { Grid, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import React from 'react';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

        var footerComponent;

        if(token != ""){
            footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box style={{ backgroundColor: "black", height: "100px" }} >
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h5" className='txt7' align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com/Edusan17" target="_blank">
                                        <GitHubIcon style={{ fontSize: 48, color:"white" }} />
                                </a>
                                <a href="https://www.instagram.com/duuh_sanx/" target="_blank">
                                    <InstagramIcon style={{ fontSize: 50, color:"white" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/eduardo-cordeiro-dos-santos-31a4291a1/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 50, color:"white" }} />
                                </a>
                            </Box>
                            </Box>
                        </Box>
                        <Box style={{ backgroundColor: "black", height: "60px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" className='txt7' align="center" gutterBottom style={{ color: "white"}} >© 2022 Copyright:</Typography>
                            </Box>
                            <Box>
                                <a target="_blank" className="text-decorator-none" href="https://github.com/Edusan17">
                                    <Typography variant="subtitle2" className='txt7' gutterBottom style={{ color: "white" }} align="center">github.com/Edusan17</Typography>
                                </a>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
        }
        return (
            <>
                {footerComponent}
        </>
    )
}

export default Footer;