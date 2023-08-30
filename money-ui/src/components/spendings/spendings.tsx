import { useSelector } from "react-redux";
import SpendingForm, { ICategory } from "./spending-form";
import SpendingsList from "./spendings-list";
import { SelectChangeEvent } from "@mui/material";
import { createSpendingAsync } from "../../redux/actionCreators";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";

export default function Spendings() {
  const spendingForm = useSelector((state: any) => state.spendings.spendingForm);
  const categories = useSelector((state: any) => state.spendings.categories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/getCategories`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_CATEGORIES', payload: data.categories })
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    if (!categories) {
      return;
    }

    const category: ICategory | undefined = categories.find((category: ICategory) => category?.id?.toString() === event.target.value);
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
    dispatch(createSpendingAsync(spendingForm))
  }

  const handleUpdateButtonClick = () => {
    dispatch({
      type: 'UPDATE_SPENDING',
      payload: {
        id: spendingForm.id,
        cost: spendingForm.cost,
        comment: spendingForm.comment,
        category: spendingForm.category,
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