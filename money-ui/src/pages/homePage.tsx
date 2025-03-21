import Hello from 'components/hello/hello'
import TabContainer from 'components/tab/tab-container';
import Contacts from 'components/contacts/contacts';

export default function HomePage() {
  return (
    <>
      <TabContainer tabContainerName='home' labels={['Home', 'Contacts']}>
        <Hello />
        <Contacts />
      </TabContainer>
    </>
  );
}
