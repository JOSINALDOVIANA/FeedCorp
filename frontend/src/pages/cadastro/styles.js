import { styled } from '@mui/material/styles';
import { Box, Grid, Link } from '@mui/material';


// export const MainSignUpBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
// }))

export const SignUpWallpaper = styled(Box)(({ theme }) => ({
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export const SignUpBox = styled(Grid)(({ theme }) => ({
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