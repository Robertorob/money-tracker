import '../tab/tab-panel.css';
import { ISpending } from "../../classes/spending";
import CommonList from "../common/common-list";

export interface ISpendingsListProps {
  spendings: ISpending[];
  deleteHandler: (id: number) => void
  updateHandler: (id: number) => void
  expandHandler: (id: number) => void
}

export default function SpendingsList(props: ISpendingsListProps) {
  return  <>
            <CommonList
              items={props.spendings}
              columns={[
                {
                  label: 'Cost',
                  width: 3,
                  fieldNames: ['cost'],
                },
                {
                  label: 'Comment',
                  width: 4,
                  fieldNames: ['comment'],
                },
                {
                  label: 'Tag',
                  width: 3,
                  fieldNames: ['tag', 'name'],
                },
              ]}
              deleteHandler={props.deleteHandler}
              updateHandler={props.updateHandler}
              expandHandler={props.expandHandler}
            />
          </>
}
