import { AnyAction } from "@reduxjs/toolkit";
import { ICategory, ISpendingForm } from "../../components/spendings/spending-form";
import { ISpending } from "../../classes/spending";

export interface IState {
  spendings: ISpendingsState
}

export interface ISpendingsState {
  spendingForm: ISpendingForm;
  spendings: ISpending[];
  categories: ICategory[];
}

const initialState: ISpendingsState = {
  spendingForm: {
    id: 0,
    cost: 0,
    comment: '', 
    category: { id: 0, name: '' },
    isUpdate: false,
  },
  spendings: [],
  categories: [],
}

export const spendingsReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      }
    case 'FETCH_SPENDINGS':
      return {
        ...state,
        spendings: action.payload,
      }
    case 'CREATE_SPENDING':
      return {
        ...state,
        spendings: [ action.payload, ...state.spendings ],
        spendingForm: {
          ...initialState.spendingForm,
          isUpdate: false,
        }
      }
    case 'UPDATE_SPENDING':
      return { 
        ...state, 
        spendings: state.spendings.map(
          (spending) => spending.id === action.payload.id ? 
          {
            ...spending, 
            cost: action.payload.cost,
            comment: action.payload.comment,
            category: action.payload.category,
          } : spending
        ),
        spendingForm: {
          ...initialState.spendingForm,
          isUpdate: false,
        }
     }
    case 'SEND_SPENDING_TO_FORM':
      let spendingToSend = state.spendings.filter(spending => spending.id === action.payload)[0];

      return {
        ...state,
        spendingForm: {...state.spendingForm, ...spendingToSend, isUpdate: true }
      }
    case 'FORM_COMMENT_CHANGE':
      return {
        ...state,
        spendingForm: {...state.spendingForm, comment: action.payload }
      }
    case 'FORM_COST_CHANGE':
      return {
        ...state,
        spendingForm: {...state.spendingForm, cost: action.payload }
      }
    case 'FORM_CATEGORY_CHANGE':
      return {
        ...state,
        spendingForm: {...state.spendingForm, category: state.categories.filter(category => action.payload === category.id?.toString())[0] }
      }
    case 'DELETE_SPENDING':
      return {
        ...state,
        spendings: state.spendings.filter(spending => spending.id !== action.payload),
      }
    case 'EXPAND_SPENDING':
      return { 
        ...state, 
        spendings: state.spendings.map(
          (spending) => spending.id === action.payload ?
          {
            ...spending, 
            expanded: !spending.expanded,
          } : spending
        ),
     }
    default:
      return state;
  }
}