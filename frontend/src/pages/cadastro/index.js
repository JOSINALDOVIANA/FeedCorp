import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, TextField, Typography, Button, Link } from '@mui/material'
import { MainSignUpBox, SignUpWallpaper, SignUpBox, SignUpLink, campoGrid } from './styles'

import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const navegar = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            <SignUpWallpaper>
                {/* <h1>Wallpapper</h1> */}
            </SignUpWallpaper>

            <SignUpBox>

                <Box sx={{display: 'flex', alignSelf: 'flex-end', m: 2, position: 'fixed', top: 0}}>
                    <Typography mr={1}>Possui Conta?</Typography>
                    <SignUpLink onClick={() => {navegar('/login')}}>ENTRAR</SignUpLink>
                </Box>

                <Box>
                    <Typography variant='h4'>
                        Cadastro
                    </Typography>

                </Box>

                <Box component="form"
                    //noValidate
                    //onSubmit={handleSubmit} 
                    sx={{ m: '20px 50px 10px 50px' }}>

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
                        </Grid>

                    </Grid>
                    
                    <Grid container justifyContent='flex-end'>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2, alignSelf: 'flex-end' }}
                        >
                            Cadastrar
                        </Button>
                    </Grid>
                    {/* <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid> */}
                </Box>



            </SignUpBox>

        </Box>
    );
}