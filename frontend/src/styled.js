import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export const ButtonStyle = styled(Button)(({ theme }) => ({
    color: theme.opclient["01"],
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));