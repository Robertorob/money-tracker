import React from 'react';
import './App.css';
import HelloPage from './components/hello-page/hello-page'
import TabContainer from './components/tab/tab-container';
import Contacts from './components/contacts/contacts';
import Spendings from './components/spendings/spendings';
import Tags from './components/tags/tags';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export interface IMenuItem {
  label: string;
  link: string;
}

export default function App() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems: IMenuItem[] = [
    {
      label: 'Траты',
      link: '',
    },
    {
      label: 'Счётчик дней',
      link: '',
    },
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => alert('реализовать страницу')}>
              <ListItemIcon>
                {
                  {
                    0: <AttachMoneyIcon />,
                    1: <CalendarMonthIcon />,
                  }[index] || null
                }
              </ListItemIcon>
              <ListItemText primary={menuItem.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)} >
        <MenuIcon fontSize='large' color='primary' />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <TabContainer labels={['Home', 'Spendings', 'Tags', 'Contacts']}>
        <HelloPage />
        <Spendings />
        <Tags />
        <Contacts />
      </TabContainer>
    </>
  );
}
