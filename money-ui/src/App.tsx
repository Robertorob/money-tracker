import React from 'react';
import './App.css';
import HelloPage from './components/hello-page/hello-page'
import TabContainer from './components/tab/tab-container';
import Contacts from './components/contacts/contacts';

export default function App() {
  return (
    <TabContainer labels={['Home', 'Content', 'Contacts']}>
      <HelloPage />
      <>There is nothig yet</>
      <Contacts />
    </TabContainer>
  );
}
