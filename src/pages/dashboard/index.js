import React from 'react'
import AuthWrapper from '../authentication/AuthWrapper';
import { Grid } from '@mui/material';

export default function index() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Dashboard
        </Grid>
    </Grid>
    </AuthWrapper>
  )
}
