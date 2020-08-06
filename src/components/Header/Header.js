import React from "react";
import Logo from "../../assets/images/logo.svg";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

const Header = () => {
  return(
    <Container maxWidth="lg">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <img src={Logo} alt="HostGator" />
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header;