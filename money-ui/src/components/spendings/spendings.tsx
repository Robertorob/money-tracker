import { useSelector } from "react-redux";
import SpendingForm, { ITag } from "./spending-form";
import SpendingsList from "./spendings-list";
import { SelectChangeEvent } from "@mui/material";
import { createSpendingAsync, deleteSpendingAsync, updateSpendingAsync } from "../../redux/actionCreators";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { IState } from "../../redux/reducers/spendingsReducer";
import { ISelectOption } from "../common/common-form";

export default function Spendings() {
  const spendingForm = useSelector((state: IState) => state.spendings.spendingForm);
  const tags = useSelector((state: IState) => state.spendings.tags);
  const spendings = useSelector((state: IState) => state.spendings.spendings);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/tags/list`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_TAGS', payload: data.tags })
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

  const handleTagChange = (event: SelectChangeEvent) => {
    dispatch({
      type: 'FORM_TAG_CHANGE',
      payload: event.target.value,
    })
  };
  
  const handleMultiTagChange = (selectedValues: ISelectOption[]) => {
    dispatch({
      type: 'FORM_MULTI_TAG_CHANGE',
      payload: selectedValues,
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
        availableTags={tags}
        form={spendingForm}
        onCostChange={handleCostChange}
        onCommentChange={handleCommentChange}
        onTagChange={handleTagChange}
        onUpdateButtonClick={handleUpdateButtonClick}
        onCreateButtonClick={handleCreateButtonClick}
        onMultiTagChange={handleMultiTagChange}
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