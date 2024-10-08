import React from 'react';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';
import Header from '../../components/Header';

const Root: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Outlet />
  </>
);

export default Root;
