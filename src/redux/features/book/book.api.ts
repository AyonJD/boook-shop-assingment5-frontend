import { api } from '@/redux/api/apiSlice'

const bookApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllBooks: builder.query({
      query: (query) => `/book/?${query}`,
    }),
  }),
})

export const { useGetAllBooksQuery } = bookApi
