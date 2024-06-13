import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import {LoginSocialGoogle} from 'reactjs-social-login';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const AuthLogin = () => {
  const { login } = useAuth();
  const [loader,setLoader] = useState(false)
  const onLoginStart = (event) =>{
    setLoader(true)
  }

  return (
    <Grid container spacing={3}>
      <Grid pt={2} pb={2} pr={2} pl={2} bgcolor="#3887ff" borderRadius="10px">
        <LoginSocialGoogle
          scope={'email profile openid'}
          isOnlyGetToken={false}
          client_id={"170473185277-pm0tqj0fa1bk4sq70hn39ltiqfj3ovsn.apps.googleusercontent.com"}
          onLoginStart={onLoginStart}
          redirect_uri='https://cvanalyzer.vercel.app/login'
          onResolve={({ provider, data }) => {
            login(data)
            setLoader(false)
          }}
          className="google_auth"
          onReject={err => {
            setLoader(false)
          }}
        > 
          {
            loader && <CircularProgress color="inherit" size={25}/>
          }
          <GoogleIcon/>
          <Typography ml={"10px"} fontWeight="600" component={"span"}> Login with google</Typography>
        </LoginSocialGoogle>
      </Grid>
    </Grid>
  );
};

export default AuthLogin;
