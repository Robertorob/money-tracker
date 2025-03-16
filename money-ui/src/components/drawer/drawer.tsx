import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box, Divider, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerList, { IDrawerListItem } from './drawerList';

export interface IMoneyDrawerProps {
  menuItems: IDrawerListItem[];
  menuItemsAfterDivider?: IDrawerListItem[];
}

export default function MoneyDrawer(props: IMoneyDrawerProps) {
  const { menuItems, menuItemsAfterDivider } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)} >
        <MenuIcon fontSize='large' color='primary' />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <DrawerList drawerListItems={menuItems} />
          <Divider />
          <DrawerList drawerListItems={menuItemsAfterDivider ?? []} />
        </Box>
      </Drawer>
    </>
  );
}
