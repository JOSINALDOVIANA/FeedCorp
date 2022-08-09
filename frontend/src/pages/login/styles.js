import { styled } from "@mui/material/styles";
import { Box, Button, FormControlLabel, Link, TextField } from "@mui/material";


export const MuiBox = styled(Box)(({ theme }) => ({
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}))

// ################ BOTOES ####################
export const MuiButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    background: `linear-gradient(45deg, ${theme.palette.cian} 20%, ${theme.palette.cian} 80%)`,

    fontWeight: 'bold',
    fontSize: 17,
    '&:hover': {
        background: `linear-gradient(45deg, #11998e 5%, ${theme.palette.black} 70%)`,

    },
}));

// ################ INPUTS ###################
export const MuiTextField = styled(TextField)(({ theme }) => ({
    '& label': { //label dentro do textfield
        color: theme.palette.black,
    },
    '& label.Mui-focused': { //label fora do textfield -> focado
        color: theme.palette.black,
    },
    '& .MuiInput-underline:after': {//sem efeito
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        color: theme.palette.black, //cor do texto ao digitar

        '& fieldset': {//borda quando não focado
            borderColor: theme.palette.black,
        },
        '&:hover fieldset': { //borda ao passar o mouse por cima
            borderColor: theme.palette.black,
        },
        '&.Mui-focused fieldset': { //borda focada
            borderColor: theme.palette.black,
        },
    },
}));

// ################ LINKS ###################
export const MuiLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    cursor: 'pointer',

    color: theme.palette.black,
    '&:hover': {
        color: theme.palette.black,
    },
}));

// ################ MARCADOR MANTER CONECTADO ###################
export const MuiFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    color: theme.palette.black ,
    '&.Mui-checked': {
        color: theme.palette.black ,
    },
}))