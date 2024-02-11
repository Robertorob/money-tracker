import { ICategory } from "../spendings/spending-form";
import CommonForm from "../common/common-form";

export interface ICategoryFormProps {
  children?: any;
  categories: ICategory[];
  form: ICategoryForm;
  onNameChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ICategoryForm {
  id: number;
  name: string;
  isUpdate: boolean,
}

export default function CategoryForm(props: ICategoryFormProps) {
  return (
    <>
      <CommonForm
        fields={[
          {
            value: props.form.name,
            type: 'string',
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
