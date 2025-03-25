import '../tab/tab-panel.css';
import CommonList from "../common/common-list";

export interface IDaysCounterListProps {
  daysCounterItems: IDaysCounterItem[];
  deleteHandler: (id: number) => void
  updateHandler: (id: number) => void
  expandHandler: (id: number) => void
}

export interface IDaysCounterItem {
  field: string;
}

export default function DaysCounterList(props: IDaysCounterListProps) {
  return  <>
            <CommonList
              items={props.daysCounterItems}
              columns={[
                {
                  label: 'field',
                  width: 12,
                  fieldNames: ['field'],
                },
              ]}
              deleteHandler={props.deleteHandler}
              updateHandler={props.updateHandler}
              expandHandler={props.expandHandler}
            />
          </>
}
