import { configureStore } from '@reduxjs/toolkit'
import { spendingsReducer } from './reducers/spendingsReducer'
import ApiService from '../services/api'
import { useDispatch } from 'react-redux'
// ...

const store = configureStore({
  reducer: {
    spendings: spendingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: ApiService
    }})
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;