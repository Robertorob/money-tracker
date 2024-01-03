import { useSelector } from "react-redux";
import SpendingForm, { ICategory } from "./spending-form";
import SpendingsList from "./spendings-list";
import { SelectChangeEvent } from "@mui/material";
import { createSpendingAsync, deleteSpendingAsync, updateSpendingAsync } from "../../redux/actionCreators";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { IState } from "../../redux/reducers/spendingsReducer";

export default function Spendings() {
  const spendingForm = useSelector((state: IState) => state.spendings.spendingForm);
  const categories = useSelector((state: IState) => state.spendings.categories);
  const spendings = useSelector((state: IState) => state.spendings.spendings);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/categories/list`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_CATEGORIES', payload: data.categories })
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/spendings/list`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_SPENDINGS', payload: data.spendings })
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

  const deleteHandler = (id: number) => {
    dispatch(deleteSpendingAsync(id))
  }
  
  const updateHandler = (id: number) => {
    dispatch({
      type: 'SEND_SPENDING_TO_FORM',
      payload: id,
    });
  }
  
  const expandHandler = (id: number) => {
    dispatch({
      type: 'EXPAND_SPENDING',
      payload: id
    })
  };

  return (
    <>
      <SpendingForm
        categories={categories}
        form={spendingForm}
        onCostChange={handleCostChange}
        onCommentChange={handleCommentChange}
        onCategoryChange={handleCategoryChange}
        onUpdateButtonClick={handleUpdateButtonClick}
        onCreateButtonClick={handleCreateButtonClick}
      />
      <SpendingsList
        spendings={spendings}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        expandHandler={expandHandler}
      />
    </>
  )
}