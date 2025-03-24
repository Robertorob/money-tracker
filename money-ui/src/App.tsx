import 'App.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyDrawer from 'components/drawer/drawer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IDrawerListItem } from 'components/drawer/drawerList';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from 'pages/homePage';
import SpendingsPage from 'pages/spendingsPage';
import DaysCounterPage from 'pages/daysCounterPage';

export default function App() {
  const menuItems: IDrawerListItem[] = [
    {
      label: 'Main',
      link: '',
      icon: <WavingHandIcon />,
    },
    {
      label: 'Spendings',
      link: 'spendings',
      icon: <AttachMoneyIcon />,
    },
    {
      label: 'Days counter',
      link: 'days-counter',
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
      <BrowserRouter>
        <MoneyDrawer menuItems={menuItems} menuItemsAfterDivider={menuItemsAfterDivider} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/spendings" element={<SpendingsPage />} />
          <Route path="/days-counter" element={<DaysCounterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
