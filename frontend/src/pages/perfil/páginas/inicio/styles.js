import { styled } from "@mui/material/styles";
import {Card, Paper} from '@mui/material'

export const MuiBox = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    height: '100vh',
    background: theme.palette.lightGray
}))

export const FeedBox = styled('div')(({ theme }) => ({
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'flex-end'
}))

export const FeedPaper = styled(Paper)(({theme}) => ({
    width: '100%', 
    height: theme.spacing(12),
    borderRadius: 6, 
    //textAlign: 'center',
    color: theme.palette.white
}))