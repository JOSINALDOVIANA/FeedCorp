import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, TextField, Typography } from '@mui/material'
import { MainSignUpBox, SignUpWallpaper, SignUpBox, SignUpLink } from './styles'

import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const navegar = useNavigate();

    return (
        <MainSignUpBox>
            <SignUpWallpaper>
                {/* <h1>Wallpapper</h1> */}
            </SignUpWallpaper>

            <SignUpBox>

                <Box sx={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    m: 2,
                    position: 'fixed',
                    top: 0
                }}>
                    <Typography mr={1}>Possui Conta?</Typography>
                    <SignUpLink>ENTRAR</SignUpLink>
                </Box>

                <Box sx={{ 
                     height: '100vh',
                     width: '70%',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center'
                }}>
                    <Typography variant='h4'
                        sx={{
                            width: '100%',
                        }}>Cadastro</Typography>

                   <Box>
                   <TextField
                        margin='normal'
                        label='Nome'
                        autoComplete='name'
                        required
                    />

                    <TextField
                        margin='normal'
                        label='Sobrenome'
                        autoComplete='lastname'
                        required
                    />
                   </Box>

                    <TextField
                        margin='normal'
                        label='E-mail'
                        autoComplete='email'
                        required
                    />
                </Box>



            </SignUpBox>

        </MainSignUpBox>
    );
}