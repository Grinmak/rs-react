import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../enum/AppRoutes';

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup>
          <Button sx={{ color: '#FFF' }} component={NavLink} to={AppRoutes.Home}>
            Home
          </Button>
          <Button sx={{ color: '#FFF' }} component={NavLink} to={AppRoutes.AboutUsPage}>
            About Us
          </Button>
          <Button sx={{ color: '#FFF' }} component={NavLink} to={AppRoutes.FormsPage}>
            Forms
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
