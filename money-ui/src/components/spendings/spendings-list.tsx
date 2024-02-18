import '../tab/tab-panel.css';
import { ISpendingItem } from "../../classes/spending";
import CommonList from "../common/common-list";

export interface ISpendingsListProps {
  spendings: ISpendingItem[];
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
                  label: 'Tags',
                  width: 3,
                  fieldNames: ['tags'],
                  formatter: (tags: any): string => tags?.map((tag: any) => tag.name)?.join(',')
                },
              ]}
              deleteHandler={props.deleteHandler}
              updateHandler={props.updateHandler}
              expandHandler={props.expandHandler}
            />
          </>
}
