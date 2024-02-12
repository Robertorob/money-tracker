import { AnyAction } from "@reduxjs/toolkit";
import { ITagForm } from "../../components/tags/tag-form";
import { ITag } from "../../classes/tag";

export interface ITagsState {
  tagForm: ITagForm;
  tags: ITag[];
}

const initialState: ITagsState = {
  tagForm: {
    id: 0,
    name: '',
    isUpdate: false,
  },
  tags: [],
}

export const tagsReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case 'FETCH_TAGS':
      return {
        ...state,
        tags: action.payload,
      }
    case 'CREATE_TAG':
      return {
        ...state,
        tags: [ action.payload, ...state.tags ],
        tagForm: {
          ...initialState.tagForm,
          isUpdate: false,
        }
      }
    case 'UPDATE_TAG':
      return { 
        ...state, 
        tags: state.tags.map(
          (tag) => tag.id === action.payload.id ? 
          {
            ...tag, 
            name: action.payload.name,
          } : tag
        ),
        tagForm: {
          ...initialState.tagForm,
          isUpdate: false,
        }
     }
    case 'SEND_TAG_TO_FORM':
      let tagToSend = state.tags.filter(tag => tag.id === action.payload)[0];

      return {
        ...state,
        tagForm: {...state.tagForm, ...tagToSend, isUpdate: true }
      }
    case 'TAG_FORM_NAME_CHANGE':
      return {
        ...state,
        tagForm: {...state.tagForm, name: action.payload }
      }
    case 'DELETE_TAG':
      return {
        ...state,
        tags: state.tags.filter(tag => tag.id !== action.payload),
      }
    case 'EXPAND_TAG':
      return { 
        ...state, 
        tags: state.tags.map(
          (tag) => tag.id === action.payload ?
          {
            ...tag, 
            expanded: !tag.expanded,
          } : tag
        ),
     }
    default:
      return state;
  }
}