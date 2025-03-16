import React from 'react';
import './App.css';
import HelloPage from './components/hello-page/hello-page'
import TabContainer from './components/tab/tab-container';
import Contacts from './components/contacts/contacts';
import Spendings from './components/spendings/spendings';
import Tags from './components/tags/tags';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyDrawer from './components/drawer/drawer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IDrawerListItem } from './components/drawer/drawerList';

export default function App() {
  const menuItems: IDrawerListItem[] = [
    {
      label: 'Spendings',
      link: '',
      icon: <AttachMoneyIcon />,
    },
    {
      label: 'Days counter',
      link: '',
      icon: <CalendarMonthIcon />,
    },
  ]; 
  
  const menuItemsAfterDivider: IDrawerListItem[] = [
    {
      label: 'Exit',
      link: '',
      icon: <ExitToAppIcon />,
    },
  ]; 

  return (
    <>
      <MoneyDrawer menuItems={menuItems} menuItemsAfterDivider={menuItemsAfterDivider} />
      <TabContainer labels={['Home', 'Spendings', 'Tags', 'Contacts']}>
        <HelloPage />
        <Spendings />
        <Tags />
        <Contacts />
      </TabContainer>
    </>
  );
}
