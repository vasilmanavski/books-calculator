import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const LoadingFallback: React.FC = () => (
  <Stack height={`calc(100dvh - 80px)`} justifyContent="center" alignItems="center" width="100%">
    <CircularProgress sx={{ color: '7993BB'}} />
  </Stack>
);

export default LoadingFallback;
