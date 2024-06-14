import React, { useState } from 'react';
import { Grid, Typography,Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import {auth,provider} from '../../../utils/firebaseConfig'
import {signInWithPopup} from "firebase/auth";

const AuthLogin = () => {
  const { login } = useAuth();
  const [loader,setLoader] = useState(false)
  const onLoginStart = async() =>{
    setLoader(true)
    const  data = await signInWithPopup(auth,provider)
    let {user} = data;
    login(user)
    setLoader(false)
  }

  return (
    <Grid container spacing={3}>
      <Grid pt={2} pb={2} pr={2} pl={2} bgcolor="#3887ff" borderRadius="10px">
        <Box className="google_auth" onClick={()=>onLoginStart()}>
          {
            loader && <CircularProgress color="inherit" size={25}/>
          }
          <GoogleIcon/>
          <Typography ml={"10px"} fontWeight="600" component={"span"}> Login with google</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLogin;
