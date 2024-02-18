import CommonForm from "../common/common-form";

export interface ISpendingFormProps {
  children?: any;
  tags: ITag[];
  form: ISpendingForm;
  onCostChange: any;
  onCommentChange: any;
  onTagChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ISpendingForm {
  id: number;
  cost: number;
  comment: string;
  tag: ITag;
  isUpdate: boolean,
}

export interface ITag {
  id: number | null | undefined;
  name: string;
}

export default function SpendingForm(props: ISpendingFormProps) {
  return (
    <CommonForm
      fields={[
        {
          value: props.form.cost,
          type: 'number',
          label: 'Cost',
          onChange: props.onCostChange,
        },
        {
          value: props.form.comment,
          type: 'text',
          label: 'Comment',
          onChange: props.onCommentChange,
        },
        {
          value: props.form.tag?.id?.toString() ?? 0,
          type: 'select',
          label: 'Tag',
          onChange: props.onTagChange,
          selectOptions: props.tags.map((tag: ITag) => {
            return {
              value: tag?.id,
              label: tag?.name,
            }
          }),
        },
      ]}
      isUpdate={props.form.isUpdate}
      onUpdateButtonClick={props.onUpdateButtonClick}
      onCreateButtonClick={props.onCreateButtonClick}
    />
  )
}
