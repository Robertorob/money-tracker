// import { CREATE_POST, FETCH_POSTS } from "./types";

import { AnyAction } from "@reduxjs/toolkit";
import { ICategory, ISpendingForm } from "../../components/spendings/spending-form";

interface SpendingsState {
  spendingForm: ISpendingForm;
  spendings: any[];
  categories: ICategory[];
}

const initialState: SpendingsState = {
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
      }
    case 'UPDATE_SPENDING':
      const updatedSpending = state.spendings.filter(spending => spending.id === action.payload.id);

      if (!updatedSpending)
        throw new Error('Entity not found to update');

      let newUpdatedSpending = { ...updatedSpending[0] };
      newUpdatedSpending.cost = action.payload.cost;
      newUpdatedSpending.comment = action.payload.comment;
      newUpdatedSpending.category = action.payload.category;

      let newSpendingsAfterUpdate = state.spendings.filter(spending => spending.id !== action.payload.id);
      newSpendingsAfterUpdate.push(newUpdatedSpending);
      newSpendingsAfterUpdate = newSpendingsAfterUpdate.sort((a: any, b: any) => a.id > b.id ? 1: -1);

      return {
        ...state,
        spendings: [...newSpendingsAfterUpdate],
        spendingForm: {
          ...initialState.spendingForm
        }
      }
    case 'SEND_SPENDING_TO_FORM':
      let spendingToSend = state.spendings.filter(spending => spending.id === action.payload)[0];

      let newSpendingForm: ISpendingForm = {
        ...spendingToSend,
        isUpdate: true,
      }

      return {
        ...state,
        spendingForm: {...state.spendingForm, ...newSpendingForm }
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
        spendingForm: {...state.spendingForm, category: action.payload }
      }
    case 'DELETE_SPENDING':
      return {
        ...state,
        spendings: state.spendings.filter(spending => spending.id !== action.payload),
      }
    default:
      return state;
  }
}