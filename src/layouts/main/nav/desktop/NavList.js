import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Stack, Fade, Portal, ListItemButton, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// hooks
import useActiveLink from '../../../../hooks/useActiveLink';
//
import { NavItem, NavItemDashboard } from './NavItem';
import { StyledSubheader, StyledMenu } from './styles';

// ----------------------------------------------------------------------

NavList.propTypes = {
  item: PropTypes.object,
  isOffset: PropTypes.bool,
};

export default function NavList({ item, isOffset }) {
  const { pathname } = useRouter();
  const theme = useTheme();

  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = ( event ) => {
    setAnchorEl(event.currentTarget);
    if (children) {
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleLeave = () => {
    console.log("")
  };

  return (
    <>
      <NavItem
        item={item}
        isOffset={isOffset}
        active={active}
        open={openMenu}
        isExternalLink={isExternalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        sx={{ textTransform: 'uppercase',
        //  '&:hover': {
        //     opacity: 0.48,
        //     color: theme.palette.primary.main,
        //     '& .iconify': { transition: 'all 0.3s ease-out', transform: 'rotate(-180deg)' },
        //   }, 
        }}
      />

      {!!children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
              {children.map((list) => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={handleCloseMenu}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
        // <Menu
        //   anchorEl={anchorEl}
        //   open={Boolean(anchorEl)}
        //   onClose={handleCloseMenu}
        //   anchorOrigin={{
        //     vertical: 'bottom',
        //     horizontal: 'left',
        //   }}
        //   transformOrigin={{
        //     vertical: 'top',
        //     horizontal: 'left',
        //   }}
        //   sx={{ 
        //     '& .MuiMenuItem-root': { fontSize: '1rem', padding: '8px 16px', },
        //     marginTop: 2,
        //     borderRadius: '0.5px !important',
        //     padding: 2
        //   }}
        // >
        //   <MenuItem onClick={handleCloseMenu}>Dropdown Item 1</MenuItem>
        //   <MenuItem onClick={handleCloseMenu}>Dropdown Item 2</MenuItem>
        //   <MenuItem onClick={handleCloseMenu}>Dropdown Item 3</MenuItem>
        // </Menu>

      )}
    </>
  );
}

// ----------------------------------------------------------------------

NavSubList.propTypes = {
  items: PropTypes.array,
  onClose: PropTypes.func,
  isDashboard: PropTypes.bool,
  subheader: PropTypes.string,
};

function NavSubList({ items, isDashboard, subheader, onClose }) {
  const { pathname } = useRouter();

  const isActive = (path) => pathname === path;

  return (
    <Stack spacing={2.5} gridColumn={isDashboard ? 'span 6' : 'span 2'} alignItems="flex-start">
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={isActive(item.path)}
            onClick={onClose}
            sx={{ textTransform: 'uppercase' }}
          />
        )
      )}
    </Stack>
  );
}
