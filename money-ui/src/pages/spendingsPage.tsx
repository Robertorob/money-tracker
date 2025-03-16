import TabContainer from 'components/tab/tab-container';
import Spendings from 'components/spendings/spendings';
import Tags from 'components/tags/tags';

export default function SpendingsPage() {
  return (
    <>
      <TabContainer tabContainerName='spendings' labels={['Spendings', 'Tags']}>
        <Spendings />
        <Tags />
      </TabContainer>
    </>
  );
}
