import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import bookFilterReducer from './features/book/bookFilterSlice'

export const store = configureStore({
  reducer: {
    bookFilter: bookFilterReducer,
    // api: api.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
