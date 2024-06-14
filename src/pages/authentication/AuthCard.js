import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MainCard from '../../component/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const AuthCard = ({ children, ...other }) => {
  return(
  <MainCard
    sx={{
      maxWidth: { xs: other.fullWidth?"100%":400, lg: other.fullWidth?"100%":475 },
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
  >
    { other.fullWidth ? 
      <Box sx={{ p: { xs: "0px", sm: "40px 210px", } }} bgcolor={other.bg}>{children}</Box>
      :
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }} bgcolor={other.bg}>{children}</Box>
    }
  </MainCard>
)}
AuthCard.propTypes = {
  children: PropTypes.node
};

export default AuthCard;
