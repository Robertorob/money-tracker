import '../tab/tab-panel.css';
import { ITagItem } from "../../classes/tag";
import CommonList from "../common/common-list";

export interface ITagsListProps {
  tags: ITagItem[];
  deleteHandler: (id: number) => void
  updateHandler: (id: number) => void
  expandHandler: (id: number) => void
}

export default function TagsList(props: ITagsListProps) {
  return  <>
            <CommonList
              items={props.tags}
              columns={[
                {
                  label: 'Name',
                  width: 6,
                  fieldNames: ['name'],
                },
              ]}
              deleteHandler={props.deleteHandler}
              updateHandler={props.updateHandler}
              expandHandler={props.expandHandler}
              menuWidth={6}
            />
          </>
}
