import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './tab-panel';
import { Container } from '@mui/material';

export interface ITabContainerProps {
  children?: React.ReactNode;
  labels?: string[];
  tabContainerName: string;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer(props: ITabContainerProps) {
  const { children, labels, tabContainerName } = props;
  const tabNumberPropertyName = tabContainerName + '.tabNumber'
  const [value, setValue] = React.useState(parseInt(localStorage[tabNumberPropertyName] ?? '0'));
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    localStorage[tabNumberPropertyName] = newValue;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          {labels?.map((label, index) => (<Tab key={index} label={label} {...a11yProps(index)} />)) }
        </Tabs>
      </Box>
      { 
        React.Children.map(children, (child, index) =>
          <Container key={index} maxWidth={'md'} sx={{p: 0}}>
            <TabPanel key={index} value={value} index={index}>
              {child}
            </TabPanel>
          </Container>)
      }
    </Box>
  );
}