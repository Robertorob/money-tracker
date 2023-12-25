import { IUpdateCategory } from "../classes/category";
import { ISpending, IUpdateSpending } from "../classes/spending";
import { ICategoryForm } from "../components/categories/category-form";
import { ISpendingForm } from "../components/spendings/spending-form";

export function createSpendingAsync(spending: ISpendingForm) {
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

export function updateSpendingAsync(spending: ISpendingForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const updateSpending: IUpdateSpending = {
      ...spending,
      categoryId: spending.category?.id!,
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

export function createCategoryAsync(category: ICategoryForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const createCategory = {
      ...category,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/createCategory`, {
      method: 'POST',
      body: JSON.stringify(createCategory),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: 'CREATE_CATEGORY',
        payload: data
      })
    })
    .catch((err) => {
        console.log(err.message);
    });

  }
}

export function updateCategoryAsync(category: ICategoryForm) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    const updateCategory: IUpdateCategory = {
      ...category,
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/updateCategory`, {
      method: 'POST',
      body: JSON.stringify(updateCategory),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      dispatch({
        type: 'UPDATE_CATEGORY',
        payload: category
      })
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
}

export function deleteCategoryAsync(id: number) {
  return async (dispatch: any, getState: any, { api }: any): Promise<any> => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/deleteCategory/${id}`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      dispatch({
        type: 'DELETE_CATEGORY',
        payload: id,
      });
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
}
