import { styled } from '@mui/material/styles';
import { Box, Link } from '@mui/material';


export const MainSignUpBox = styled(Box)(({ theme }) => ({
    display: 'flex',
}))

export const SignUpWallpaper = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '60%',
    background: theme.palette.cian
}))

export const SignUpBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const SignUpLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    fontFamily: 'roboto',
    cursor: 'pointer',
    alignSelf: 'center',
    color: theme.palette.cian,
    '&:hover': {
        color: theme.palette.purple,
    },
}));