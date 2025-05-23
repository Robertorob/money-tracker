import Contacts from "components/contacts/contacts";
import DaysCounterForm from "components/days-counter/days-counter-form";
import DaysCounterList from "components/days-counter/days-counter-list";
import Hello from "components/hello/hello";
import TabContainer from "components/tab/tab-container";

export default function DaysCounterPage() {
   return (
    <>
      <div>
        <TabContainer tabContainerName='days-counter' labels={['Events', 'Add']}>
          <DaysCounterList daysCounterItems={[
              {
                field: 'field 1',
              },
              {
                field: 'field 2',
              },
            ]}
            deleteHandler={(id: number) => {alert("Function not implemented.")}}
            updateHandler={(id: number) => {alert("Function not implemented.")}}
            expandHandler={(id: number) => {alert("Function not implemented.")}}
          />
          <DaysCounterForm form={{
            isUpdate: false,
            field: '3',
          }} onFieldChange={undefined} onUpdateButtonClick={undefined} onCreateButtonClick={undefined}  />
        </TabContainer>
      </div>
    </>
  );
}
