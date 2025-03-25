import CommonForm from "../common/common-form";

export interface IDaysCounterFormProps {
  children?: any;
  form: IDaysCounterForm;
  onFieldChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface IDaysCounterForm {
  isUpdate: boolean;
  field: string;
}

export interface ITag {
  id: number;
  name: string;
}

export default function DaysCounterForm(props: IDaysCounterFormProps) {
  return (
    <CommonForm
      fields={[
        {
          value: props.form.field,
          type: 'text',
          label: 'Field',
          onChange: props.onFieldChange,
        },
      ]}
      isUpdate={props.form.isUpdate}
      onUpdateButtonClick={props.onUpdateButtonClick}
      onCreateButtonClick={props.onCreateButtonClick}
    />
  )
}
