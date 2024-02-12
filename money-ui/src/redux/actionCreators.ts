import { IUpdateTag } from "../classes/tag";
import { ISpending, IUpdateSpending } from "../classes/spending";
import { ITagForm } from "../components/tags/tag-form";
import { ISpendingForm } from "../components/spendings/spending-form";

export function createSpendingAsync(spending: ISpendingForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const createSpending = {
      ...spending,
      tagId: spending.tag?.id === 0 ? null : spending.tag?.id,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/spendings/create`, {
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

export function updateSpendingAsync(spending: ISpendingForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const updateSpending: IUpdateSpending = {
      ...spending,
      tagId: spending.tag?.id,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/spendings/update`, {
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
    await fetch(`${process.env.REACT_APP_SERVER_URL}/spendings/delete/${id}`, {
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

export function createTagAsync(tag: ITagForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const createTag = {
      ...tag,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/tags/create`, {
      method: 'POST',
      body: JSON.stringify(createTag),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: 'CREATE_TAG',
        payload: data
      })
    })
    .catch((err) => {
        console.log(err.message);
    });

  }
}

export function updateTagAsync(tag: ITagForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const updateTag: IUpdateTag = {
      ...tag,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/tags/update`, {
      method: 'POST',
      body: JSON.stringify(updateTag),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      dispatch({
        type: 'UPDATE_TAG',
        payload: tag
      })
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
}

export function deleteTagAsync(id: number) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/tags/delete/${id}`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      dispatch({
        type: 'DELETE_TAG',
        payload: id,
      });
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
}
