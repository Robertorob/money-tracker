import { useSelector } from "react-redux";
import TagForm from "./tag-form";
import TagsList from "./tags-list";
import { createTagAsync, deleteTagAsync, updateTagAsync } from "../../redux/actionCreators";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { IState } from "../../redux/reducers/spendingsReducer";

export default function Tags() {
  const tagForm = useSelector((state: IState) => state.tags.tagForm);
  const tags = useSelector((state: IState) => state.tags.tags);

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


  const handleNameChange = (event: any) => {
    dispatch({
      type: 'TAG_FORM_NAME_CHANGE',
      payload: event.target.value as string,
    })
  };

  const handleCreateButtonClick = () => {
    dispatch(createTagAsync(tagForm))
  }

  const handleUpdateButtonClick = () => {
    dispatch(updateTagAsync(tagForm))
  }

  const deleteHandler = (id: number) => {
    dispatch(deleteTagAsync(id))
  }
  
  const updateHandler = (id: number) => {
    dispatch({
      type: 'SEND_TAG_TO_FORM',
      payload: id,
    });
  }
  
  const expandHandler = (id: number) => {
    dispatch({
      type: 'EXPAND_TAG',
      payload: id
    })
  };

  return (
    <>
      <TagForm 
        tags={tags}
        form={tagForm}
        onNameChange={handleNameChange}
        onUpdateButtonClick={handleUpdateButtonClick}
        onCreateButtonClick={handleCreateButtonClick}
      />
      <TagsList
        tags={tags}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        expandHandler={expandHandler}
      />
    </>
  )
}