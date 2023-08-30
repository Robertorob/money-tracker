import { Spending, UpdateSpending } from "../classes/spending";

export function createSpendingAsync(spending: Spending) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const createSpending = {
      ...spending,
      categoryId: spending.category?.id === 0 ? null : spending.category?.id,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/createSpending`, {
      method: 'POST',
      body: JSON.stringify(createSpending),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
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

export function updateSpendingAsync(spending: Spending) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const updateSpending: UpdateSpending = {
      ...spending,
      categoryId: spending.category?.id,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/updateSpending`, {
      method: 'POST',
      body: JSON.stringify(updateSpending),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      dispatch({
        type: 'UPDATE_SPENDING',
        payload: spending
      })
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
}

export function deleteSpendingAsync(id: number) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/deleteSpending/${id}`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      dispatch({
        type: 'DELETE_SPENDING',
        payload: id,
      });
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
}
