import { useSelector } from "react-redux";
import CategoryForm from "./category-form";
import CategoriesList from "./categories-list";
import { SelectChangeEvent } from "@mui/material";
import { createCategoryAsync, deleteCategoryAsync, updateCategoryAsync } from "../../redux/actionCreators";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { IState } from "../../redux/reducers/spendingsReducer";

export default function Categories() {
  const categoryForm = useSelector((state: IState) => state.categories.categoryForm);
  const categories = useSelector((state: IState) => state.categories.categories);

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


  const handleNameChange = (event: any) => {
    dispatch({
      type: 'CATEGORY_FORM_NAME_CHANGE',
      payload: event.target.value as string,
    })
  };

  const handleCreateButtonClick = () => {
    dispatch(createCategoryAsync(categoryForm))
  }

  const handleUpdateButtonClick = () => {
    dispatch(updateCategoryAsync(categoryForm))
  }

  const deleteHandler = (id: number) => {
    dispatch(deleteCategoryAsync(id))
  }
  
  const updateHandler = (id: number) => {
    dispatch({
      type: 'SEND_CATEGORY_TO_FORM',
      payload: id,
    });
  }
  
  const expandHandler = (id: number) => {
    dispatch({
      type: 'EXPAND_CATEGORY',
      payload: id
    })
  };

  return (
    <>
      <CategoryForm 
        categories={categories}
        form={categoryForm}
        onNameChange={handleNameChange}
        onUpdateButtonClick={handleUpdateButtonClick}
        onCreateButtonClick={handleCreateButtonClick}
      />
      <CategoriesList
        categories={categories}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        expandHandler={expandHandler}
      />
    </>
  )
}