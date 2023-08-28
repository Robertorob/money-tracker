import { Spending } from "../classes/spending";

export function createSpendingAsync(spending: Spending) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    setTimeout(() => {
      dispatch({
        type: 'CREATE_SPENDING',
        payload: spending
      })
    }, 1000);

  }
}