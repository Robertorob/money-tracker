import { ITag } from "../spendings/spending-form";
import CommonForm from "../common/common-form";

export interface ITagFormProps {
  children?: any;
  tags: ITag[];
  form: ITagForm;
  onNameChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ITagForm {
  id: number;
  name: string;
  isUpdate: boolean,
}

export default function TagForm(props: ITagFormProps) {
  return (
    <>
      <CommonForm
        fields={[
          {
            value: props.form.name,
            type: 'text',
            label: 'Name',
            onChange: props.onNameChange,
          },
        ]}
        isUpdate={props.form.isUpdate}
        onUpdateButtonClick={props.onUpdateButtonClick}
        onCreateButtonClick={props.onCreateButtonClick}
      />
    </>
  )
}
