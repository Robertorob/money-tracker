import { configureStore } from '@reduxjs/toolkit'
import { spendingsReducer } from './reducers/spendingsReducer'
// ...

const store = configureStore({
  reducer: {
    spendings: spendingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;