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
  const formGroupSx: any = {
    p:'1em',
    borderRadius: '4px',
    marginBottom: '1em',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  }

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
          value: props.form.category.id,
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
