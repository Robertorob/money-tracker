import { AnyAction } from "@reduxjs/toolkit";
import { ICategoryForm } from "../../components/categories/category-form";
import { ICategory } from "../../classes/category";

export interface ICategoriesState {
  categoryForm: ICategoryForm;
  categories: ICategory[];
}

const initialState: ICategoriesState = {
  categoryForm: {
    id: 0,
    name: '',
    isUpdate: false,
  },
  categories: [],
}

export const categoriesReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }
    case 'CREATE_CATEGORY':
      return {
        ...state,
        categories: [ action.payload, ...state.categories ],
        categoryForm: {
          ...initialState.categoryForm,
          isUpdate: false,
        }
      }
    case 'UPDATE_CATEGORY':
      return { 
        ...state, 
        categories: state.categories.map(
          (category) => category.id === action.payload.id ? 
          {
            ...category, 
            name: action.payload.name,
          } : category
        ),
        categoryForm: {
          ...initialState.categoryForm,
          isUpdate: false,
        }
     }
    case 'SEND_CATEGORY_TO_FORM':
      let categoryToSend = state.categories.filter(category => category.id === action.payload)[0];

      return {
        ...state,
        categoryForm: {...state.categoryForm, ...categoryToSend, isUpdate: true }
      }
    case 'CATEGORY_FORM_NAME_CHANGE':
      return {
        ...state,
        categoryForm: {...state.categoryForm, name: action.payload }
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
      }
    case 'EXPAND_CATEGORY':
      return { 
        ...state, 
        categories: state.categories.map(
          (category) => category.id === action.payload ?
          {
            ...category, 
            expanded: !category.expanded,
          } : category
        ),
     }
    default:
      return state;
  }
}