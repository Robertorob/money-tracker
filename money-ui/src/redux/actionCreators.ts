import { Spending } from "../classes/spending";

export function createSpendingAsync(spending: Spending) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const createSpending = {
      ...spending,
      categoryId: spending.category?.id,
    }
    await fetch('http://localhost:5062/createSpending', {
      method: 'POST',
      body: JSON.stringify(createSpending),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      debugger;
      dispatch({
        type: 'CREATE_SPENDING',
        payload: data
      })
    })
    .catch((err) => {
        console.log(err.message);
    });

  }
}