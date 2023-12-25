import React from 'react';
import './App.css';
import HelloPage from './components/hello-page/hello-page'
import TabContainer from './components/tab/tab-container';
import Contacts from './components/contacts/contacts';
import Spendings from './components/spendings/spendings';
import Categories from './components/categories/categories';

export default function App() {
  return (
    <TabContainer labels={['Home', 'Spendings', 'Categories', 'Contacts']}>
      <HelloPage />
      <Spendings />
      <Categories />
      <Contacts />
    </TabContainer>
  );
}
