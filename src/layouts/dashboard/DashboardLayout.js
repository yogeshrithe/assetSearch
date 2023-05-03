import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import { Box } from '@mui/material';
import Header from './header';
import Footer from './footer'
import Nav from './nav';


// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  // flexGrow: 1,
  position:'relative',
  overflow: 'auto',
  width: '100%',
  paddingTop: APP_BAR_MOBILE + 28,
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 8,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledRoot>
        <Header onOpenNav={() => setOpen(true)} />
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Nav openNav={open} onCloseNav={() => setOpen(false)} />
        </Box>
        <Main>
          <Outlet />
        </Main>
      </StyledRoot>
      <Footer/>
    </>
  );
}
