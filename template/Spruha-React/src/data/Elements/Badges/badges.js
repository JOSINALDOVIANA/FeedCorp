import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export function CircularDeterminate() {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#51d866", fontSize: '20px' }} variant="determinate" value={100} />
    </Stack>
  );
}
export function CircularDeterminate2() {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#53caed", fontSize: '20px' }} variant="determinate" value={75} />
    </Stack>
  );
}
export function CircularDeterminate3() {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress style={{ color: "#f16d75", fontSize: '20px' }} value={25} />
    </Stack>
  );
}