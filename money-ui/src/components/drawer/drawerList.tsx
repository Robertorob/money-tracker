import {  List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface IDrawerListItem {
  label: string;
  link: string;
  icon: any;
}

export interface IDrawerListProps {
  drawerListItems: IDrawerListItem[];
}

export default function DrawerList(props: IDrawerListProps) {
  const navigate = useNavigate();
  const { drawerListItems } = props;

  return (
    <List>
      {drawerListItems.map((drawerListItem, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => navigate(drawerListItem.link)}>
            <ListItemIcon>{drawerListItem.icon}</ListItemIcon>
            <ListItemText primary={drawerListItem.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
