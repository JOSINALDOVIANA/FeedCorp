import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
export const ButtonStyle = styled(Button)(({ theme }) => ({
    color: theme.opclient["01"],
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));