import CommonForm from "../common-form/common-form";

export interface ISpendingFormProps {
  children?: any;
  categories: ICategory[];
  form: ISpendingForm;
  onCostChange: any;
  onCommentChange: any;
  onCategoryChange: any;
  onUpdateButtonClick: any;
  onCreateButtonClick: any;
}

export interface ISpendingForm {
  id: number;
  cost: number;
  comment: string;
  category: ICategory;
  isUpdate: boolean,
}

export interface ICategory {
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
          type: 'string',
          label: 'Comment',
          onChange: props.onCommentChange,
        },
        {
          value: props.form.category?.id?.toString() ?? 0,
          type: 'select',
          label: 'Category',
          onChange: props.onCategoryChange,
          selectOptions: props.categories.map((category: ICategory) => {
            return {
              value: category?.id,
              label: category?.name,
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
