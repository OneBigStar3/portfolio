import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Menu, MenuItem, AppBar, Toolbar, Container, Stack, Link } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// routes
import { PATH_DOCS, PATH_MINIMAL_ON_STORE } from '../../routes/paths';
// components
import Logo from '../../components/logo';
import Label from '../../components/label';
//
import NavMobile from './nav/mobile';
import navConfig from './nav/config-navigation';
import NavDesktop from './nav/desktop';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    console.log('Current target:', event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar  sx={{ boxShadow: 0, backgroundColor: '#252980' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          px: { lg: 12 },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            // ...bgBlur({ color: theme.palette.background.default }),
            // ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        {/* <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}> */}
        {/* <Stack direction="row" alignItems="center" sx={{ px: { lg: 12 } }}> */}
          <Logo />

          <Link
            href={PATH_DOCS.changelog}
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ ml: 1 }}
          >
            <Label color="info"> v4.3.0 </Label>
          </Link>

          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Stack
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={{ xs: 0.5, sm: 1.5 }}
          >

            {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

            <Button variant="outlined" onMouseOver={handleMenuOpen} target="_blank" rel="noopener" href={PATH_MINIMAL_ON_STORE}>
              Get a quote
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{ 
                '& .MuiMenuItem-root': { fontSize: '1rem', padding: '8px 16px', },
                marginTop: 2,
                borderRadius: '0.5px !important',
                padding: 2
              }}
            >
              <MenuItem onClick={handleMenuClose}>Dropdown Item 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Dropdown Item 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Dropdown Item 3</MenuItem>
            </Menu>

            {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}

          </Stack>
        {/* </Stack> */}
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
