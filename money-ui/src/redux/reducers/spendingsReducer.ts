// import { CREATE_POST, FETCH_POSTS } from "./types";

import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
  spendingForm: {
    id: 0,
    cost: 0,
    comment: '', 
    category: { id: 0, name: '' },
    update: false,
  },
  spendings: [
    {
      id: 1,
      cost: 1500,
      comment: 'bread, water in supermarket', 
      category: { id: 1, name: 'Food and everyday stuff' },
    },
    {
      id: 2,
      cost: 900,
      comment: 'gas', 
      category: { id: 2, name: 'Car' },
    },
    {
      id: 3,
      cost: 2200,
      comment: 'with friends', 
      category: { id: 3, name: 'Cafe' },
    },
  ],
}

export const spendingsReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case 'CREATE_SPENDING':
      return {
        ...state,
        spendings: [...state.spendings, action.payload]
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

      let newSpendingForm = {
        ...spendingToSend,
        update: true,
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