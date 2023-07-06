// import { CREATE_POST, FETCH_POSTS } from "./types";

import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
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
    case 'DELETE_SPENDING':
      return {
        ...state,
        spendings: state.spendings.filter(spending => spending.id !== action.payload),
      }
    default:
      return state;
  }
}