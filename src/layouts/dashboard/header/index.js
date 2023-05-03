import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { withStyles } from "@mui/styles";
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Chip, Button } from '@mui/material';
import { bgBlur } from '../../../utils/cssStyles';

// utils
// components
import Iconify from '../../../components/iconify';
//
import AccountPopover from './AccountPopover';
import './MenuOptions.scss'



// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;


const StyledChip = withStyles((theme) => ({
  root: {
    backgroundColor: '#00aeae',
    color: 'white',
    boxShadow: `0px 0px 6px 0px #00aeae`,
    border: '1px solid #7cc9c8',
    "&:hover": {
      color: 'white',
      backgroundColor: '#009090'
    },
    "&:focus": {
      color: 'white',
      backgroundColor: '#009090'
    },
  }
}))(Chip);


const navItems = [{ label: 'Search Portal', path: 'search' },
{ label: 'Our Services', path: 'services' },
{ label: 'About Us', path: 'about' },
{ label: 'Associate With Us', path: 'associate' },
{ label: 'FAQ', path: 'faq' },
{ label: 'Contact Us', path: 'contact' }]

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: '#2cccc4' }),
  boxShadow: 'none',
  height: 100,
  [theme.breakpoints.up('lg')]: {
    // width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  paddingTop: 20,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));


const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center'
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));
// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {

  const navigate = useNavigate()

  const user = useSelector(state => state.updateProfileDetails)

  const handleNavigate = () => {
    window.scrollTo(0, 0)
  }

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4"  >
            <IconButton onClick={() => navigate("/home")} sx={{ color: 'white' }}>
              Asset Search
            </IconButton>
          </Typography>
        </Box>
        <StyledStack direction={"row"}
          spacing={{
            sm: 5,
          }}>
          {navItems.map((item, index) => {
            return (<NavLink underline="none" key={index} to={item.path} onClick={() => handleNavigate()} style={{ textDecoration: 'none', color: 'white' }}>
              {item.label}
            </NavLink>)
          })}

        </StyledStack>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {!user ?
            <Button onClick={() => navigate("/login")} variant="contained">Login</Button>
            : <> <AccountPopover /><span>{`${user.first_name} ${user.last_name}`}</span></>}

        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
