import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
// @mui
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  const navigate = useNavigate()

  const handleNavigate = () => {
    window.scrollTo(0, 0)
  }

  return (
    <StyledNavItem
      component={NavLink}
      to={path}
      onClick={()=>handleNavigate()}
      sx={{
        '&.active': {
          color: 'white',
          bgcolor: '#2cccc4',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon><img src={icon} alt="" height={25} /></StyledNavItemIcon>

      <ListItemText primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
