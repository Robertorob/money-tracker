// import { CREATE_POST, FETCH_POSTS } from "./types";

import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
  spendings: [
    {
      id: 1,
      comment: 'bread, water in supermarket', 
      category: 'Food',
    },
    {
      id: 2,
      comment: 'gas', 
      category: 'Car',
    },
    {
      id: 3,
      comment: 'mobile phone', 
      category: 'Tech',
    },
  ]
}

export const spendingsReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case 'CREATE_SPENDING':
      return {
        ...state,
        spendings: [...state.spendings, action.payload]
      }
    default:
      return state;
  }
}