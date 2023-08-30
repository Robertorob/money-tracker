import { useSelector } from "react-redux";
import SpendingForm, { ICategory } from "./spending-form";
import SpendingsList from "./spendings-list";
import { SelectChangeEvent } from "@mui/material";
import { createSpendingAsync, updateSpendingAsync } from "../../redux/actionCreators";
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
    dispatch({
      type: 'FORM_CATEGORY_CHANGE',
      payload: event.target.value,
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
    dispatch(updateSpendingAsync(spendingForm))
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