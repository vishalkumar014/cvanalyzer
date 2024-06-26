import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box} from '@mui/material';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <Box sx={{ display: 'flex', width: '100%' }} bgcolor={"#0000"}>
      <Box component="main" className='logged_user' bgcolor={"#000"} sx={{ width: '100%', flexGrow: 1, }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
