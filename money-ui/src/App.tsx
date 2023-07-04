import React from 'react';
import './App.css';
import HelloPage from './components/hello-page/hello-page'
import TabContainer from './components/tab/tab-container';

export default function App() {
  return (
    <TabContainer labels={['Home', 'Content']}>
      <HelloPage />
      <>Content</>
    </TabContainer>
  );
}
