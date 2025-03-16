import {  List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export interface IDrawerListItem {
  label: string;
  link: string;
  icon: any;
}

export interface IDrawerListProps {
  drawerListItems: IDrawerListItem[];
}

export default function DrawerList(props: IDrawerListProps) {

  const { drawerListItems } = props;

  return (
    <List>
      {drawerListItems.map((drawerListItem, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => alert('implement transition')}>
            <ListItemIcon>{drawerListItem.icon}</ListItemIcon>
            <ListItemText primary={drawerListItem.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
