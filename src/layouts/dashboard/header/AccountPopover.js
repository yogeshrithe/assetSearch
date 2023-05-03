import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// mocks_
import logo from '../../../components/assets/img/avatar_default.jpg'
import LogoutImage from '../../../components/assets/img/logout.png'
import ProfileImage from '../../../components/assets/img/profile.png'
import { LOG_OUT } from '../../../redux/actions';


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Profile',
    icon: ProfileImage,
    path: '/profile'
  }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const navigate = useNavigate()

  const user = useSelector(state => state.updateProfileDetails)

  const dispatch=useDispatch()

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const Logout = () => {
    localStorage.removeItem("userDetails")
    localStorage.removeItem("name")
    localStorage.removeItem("rememberMe")
    localStorage.removeItem("isLogin")
    localStorage.removeItem("customerData")
    localStorage.removeItem("searchResult")
    dispatch(LOG_OUT())
    navigate("/home")
  }

  const handleNavigate = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <>
     
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={logo} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 230,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack sx={{ p: 1 }}>
          <MenuItem>
            <Avatar src={logo} alt="photoURL" />
            {user ? <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle1" noWrap>
                {`${user.first_name} ${user.last_name}`}
                
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {user.email}
              </Typography>
            </Box> : ''}
          </MenuItem>
        </Stack>


        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => { setOpen(null); handleNavigate(option.path) }}>
              <img src={ProfileImage} alt="" height={35} />
              <Typography sx={{ ml: 2, }}>{option.label}</Typography>
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={() => Logout()} sx={{ m: 1 }}>
          <img src={LogoutImage} alt="" height={35} />
          <Typography sx={{ ml: 2, }}>Logout</Typography>
        </MenuItem>
      </Popover>
    </>
  );
}
