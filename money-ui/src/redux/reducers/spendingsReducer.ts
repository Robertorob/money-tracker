import { AnyAction } from "@reduxjs/toolkit";
import { ITag, ISpendingForm } from "../../components/spendings/spending-form";
import { ISpendingItem } from "../../classes/spending";
import { ITagsState } from "./tagsReducer";
import { ISelectOption } from "../../components/common/common-form";

export interface IState {
  spendings: ISpendingsState
  tags: ITagsState
}

export interface ISpendingsState {
  spendingForm: ISpendingForm;
  spendings: ISpendingItem[];
  tags: ITag[];
}

const initialState: ISpendingsState = {
  spendingForm: {
    id: 0,
    cost: 0,
    comment: '', 
    isUpdate: false,
    tags: [],
  },
  spendings: [],
  tags: [],
}

export const spendingsReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case 'FETCH_TAGS':
      return {
        ...state,
        tags: action.payload,
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
            tags: action.payload.tags,
            expanded: false,
          } : spending
        ),
        spendingForm: {
          ...initialState.spendingForm,
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
    case 'FORM_MULTI_TAG_CHANGE':
      const selectedIds = action.payload.map((selectedValue: ISelectOption) => (selectedValue.value));
      return {
        ...state,
        spendingForm: {...state.spendingForm, tags: state.tags.filter(tag => selectedIds.includes(tag.id)) }
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