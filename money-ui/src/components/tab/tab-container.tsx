import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './tab-panel';

interface TabContainerlProps {
  children?: React.ReactNode;
  labels?: string[];
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer(props: TabContainerlProps) {
  const { children, labels } = props;
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
        {labels?.map((label, index) => (<Tab label={label} {...a11yProps(index)} />)) }
      </Tabs>
    </Box>
    { 
      React.Children.map(children, (child, index) => (<TabPanel value={value} index={index}>
        {child}
      </TabPanel>)) 
    }
    </Box>
  );
}