import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tab-panel.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
  
export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='tab-panel'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
    </div>
  );
}