import { styled } from "@mui/material/styles";

export const MuiBox = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1)
}))

export const FeedBox = styled('div')(({ theme }) => ({
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'flex-end'
}))
