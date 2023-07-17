import { useDispatch, useSelector } from "react-redux";
import SpendingForm, { ICategory } from "./spending-form";
import SpendingsList from "./spendings-list";
import { SelectChangeEvent } from "@mui/material";

interface SpendingsProps {
  children?: any,
}

export default function Spendings(props: any) {
  const spendingForm = useSelector((state: any) => state.spendings.spendingForm);
  const categories = useSelector((state: any) => state.spendings.categories);

  const dispatch = useDispatch();

  const handleCategoryChange = (event: SelectChangeEvent) => {
    if (!props.categories) {
      return;
    }

    const category: ICategory | undefined = props.categories.find((category: ICategory) => category?.id?.toString() === event.target.value);
    dispatch({
      type: 'FORM_CATEGORY_CHANGE',
      payload: category,
    })
  };

  const handleCommentChange = (event: any) => {
    dispatch({
      type: 'FORM_COMMENT_CHANGE',
      payload: event.target.value as string,
    })
  };

  const handleCostChange = (event: any) => {
    dispatch({
      type: 'FORM_COST_CHANGE',
      payload: event.target.value as number,
    })
  };
  
  const handleCreateButtonClick = () => {
    dispatch({
      type: 'CREATE_SPENDING',
      payload: {
        cost: props.form.cost,
        comment: props.form.comment,
        category: props.form.category,
      }
    });
  }

  const handleUpdateButtonClick = () => {
    dispatch({
      type: 'UPDATE_SPENDING',
      payload: {
        id: props.form.id,
        cost: props.form.cost,
        comment: props.form.comment,
        category: props.form.category,
      }
    });
  }


  return (
    <>
      <SpendingForm 
        categories={categories}
        form={spendingForm}
        onCostChange={handleCostChange}
        onCommentChange={handleCommentChange}
        onCategoryChange={handleCategoryChange}
        onUpdateButtonClick={handleUpdateButtonClick}
        onCreateButtonClick={handleCreateButtonClick}  />
      <SpendingsList />
    </>
  )
}