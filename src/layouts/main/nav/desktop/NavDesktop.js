import PropTypes from 'prop-types';
// @mui
import { Stack, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

NavDesktop.propTypes = {
  data: PropTypes.array,
  isOffset: PropTypes.bool,
};

export default function NavDesktop({ isOffset, data }) {
  return (
    <Stack component="nav" direction="row" spacing={3} sx={{ mr: 2, height: 1 }}>
      {data.map((link) => (
        <NavList key={link.title} item={link} isOffset={isOffset} />
        // <ListItem key={link.title} disablePadding>
        //   <ListItemButton sx={{ textAlign: 'center' }} >
        //     <ListItemText primary={link.title} />
        //   </ListItemButton>
        // </ListItem>
      ))}
    </Stack>
  );
}
