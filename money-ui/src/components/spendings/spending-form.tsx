import CommonForm from "../common/common-form";

export interface ISpendingFormProps {
  children?: any;
  availableTags: ITag[];
  form: ISpendingForm;
  onCostChange: any;
  onCommentChange: any;
  onTagsChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ISpendingForm {
  id: number;
  cost: number;
  comment: string;
  tags: ITag[];
  isUpdate: boolean,
}

export interface ITag {
  id: number;
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
          value: props.form.tags ? props.form.tags.map((tag: ITag) => tag.id) : [],
          type: 'multiselect',
          label: 'Tags',
          onChange: props.onTagsChange,
          selectOptions: props.availableTags.map((tag: ITag) => {
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
