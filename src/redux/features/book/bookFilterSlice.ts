import { createSlice } from '@reduxjs/toolkit'

interface IBookFilter {
  genre: string[]
  publicationYear: string[]
  searchTerm: string
}

const initialState: IBookFilter = {
  genre: [],
  publicationYear: [],
  searchTerm: '',
}

export const bookFilterSlice = createSlice({
  name: 'bookFilter',
  initialState,
  reducers: {
    setGenre: (state, action) => {
      const isExist = state.genre.includes(action.payload)
      if (isExist) {
        state.genre = state.genre.filter(genre => genre !== action.payload)
      } else {
        state.genre = action.payload
      }
    },
    setPublicationYear: (state, action) => {
      const isExist = state.publicationYear.includes(action.payload)
      if (isExist) {
        state.publicationYear = state.publicationYear.filter(
          year => year !== action.payload
        )
      } else {
        state.publicationYear = action.payload
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  },
})

export const { setGenre, setPublicationYear, setSearchTerm } = bookFilterSlice.actions
export default bookFilterSlice.reducer
