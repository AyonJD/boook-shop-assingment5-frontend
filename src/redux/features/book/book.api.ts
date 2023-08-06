import { api } from '@/redux/api/apiSlice'

const bookApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllBooks: builder.query({
      query: () => `/book`,
    }),
  }),
})

export const { useGetAllBooksQuery } = bookApi
