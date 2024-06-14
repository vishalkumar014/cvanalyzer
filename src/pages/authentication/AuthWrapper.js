import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import AuthCard from './AuthCard';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children,bg,containerEnable=true,}) => (
  <Box sx={{ minHeight: '100vh' }}>
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12}>
        {containerEnable ? 
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh)', md: 'calc(100vh)' } }}
          >
            <Grid item>
              <AuthCard bg={bg} fullWidth={false}>{children}</AuthCard>
            </Grid>
          </Grid>
        :
          <Grid
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh)', md: 'calc(100vh)' } }}
          >
            <Grid item>
              <AuthCard bg={bg} fullWidth={true}>{children}</AuthCard>
            </Grid>
          </Grid>
        }
      </Grid>
    </Grid>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;
