/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { GENRE_OPTION_ARRAY, PUBLICATION_YEAR_OPTION_ARRAY } from '@/constant'
import { useGetAllBooksQuery } from '@/redux/features/book/book.api'
import {
  Autocomplete,
  Chip,
  Container,
  FormControl,
  Grid,
  TextField,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import {
  setGenre,
  setPublicationYear,
  setSearchTerm,
} from '@/redux/features/book/bookFilterSlice'
import BookLoader from '@/components/shared/BookLoader'
import BooksCard from '../components/ui/Books/BooksCard'
import { multiFilterBook } from '@/helper'

const Books = () => {
  const [noDataFoundComponent, setNoDataFoundComponent] =
    useState<React.ReactNode>(<BookLoader />)
  const [search, setSearch] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { genre, publicationYear, searchTerm } = useAppSelector(
    state => state.bookFilter
  )
  const dispatch = useAppDispatch()

  const { data, isLoading, error } = useGetAllBooksQuery(searchQuery)

  const handleGenreChange = (newValue: string[] | string) => {
    dispatch(setGenre(newValue))
  }

  const handlePublicationYearChange = (newValue: string[] | string) => {
    dispatch(setPublicationYear(newValue))
  }

  useEffect(() => {
    if (searchTerm && search === '') dispatch(setSearchTerm(''))
  }, [searchTerm, search])

  useEffect(() => {
    const query = multiFilterBook({ genre, publicationYear, searchTerm })
    setSearchQuery(query)

    if (!data?.data?.length) {
      setTimeout(() => {
        setNoDataFoundComponent(
          <div className="mt-2 flex items-center justify-center w-full ">
            <h1 className="text-center">No Data Found</h1>
          </div>
        )
      }, 6000)
    }
  }, [genre, publicationYear, searchTerm])

  if (error) return <div>failed to load</div>

  return (
    <Container maxWidth="lg" className="py-20 ">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className=" pb-3">
            <FormControl fullWidth>
              <div>
                <Autocomplete
                  size="small"
                  className="w-full "
                  multiple
                  freeSolo
                  value={genre}
                  onChange={(event, newValue) => {
                    handleGenreChange(newValue)
                  }}
                  options={GENRE_OPTION_ARRAY}
                  getOptionLabel={option => option}
                  renderTags={() => null}
                  renderInput={params => (
                    <TextField label="Genre" {...params} />
                  )}
                ></Autocomplete>

                <div style={{ marginTop: '8px' }}>
                  {genre?.map(option => (
                    <Chip
                      key={option}
                      size="small"
                      label={option}
                      onDelete={() => {
                        handleGenreChange(option)
                      }}
                      deleteIcon={<CloseIcon />}
                      style={{
                        marginRight: '8px',
                        marginBottom: '8px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth>
              <div>
                <Autocomplete
                  size="small"
                  className="w-full "
                  multiple
                  freeSolo
                  value={publicationYear}
                  onChange={(event, newValue) => {
                    handlePublicationYearChange(newValue)
                  }}
                  options={PUBLICATION_YEAR_OPTION_ARRAY}
                  getOptionLabel={option => option}
                  renderTags={() => null}
                  renderInput={params => (
                    <TextField label="Publication Year" {...params} />
                  )}
                ></Autocomplete>

                <div style={{ marginTop: '8px' }}>
                  {publicationYear?.map(option => (
                    <Chip
                      key={option}
                      size="small"
                      label={option}
                      onDelete={() => {
                        handlePublicationYearChange(option)
                      }}
                      deleteIcon={<CloseIcon />}
                      style={{
                        marginRight: '8px',
                        marginBottom: '8px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <div className="input-group relative flex items-stretch ">
            <input
              onChange={e => setSearch(e.target.value)}
              type="search"
              className="form-control  relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-[1.5px] border-solid border-gray-400  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[2px] focus:border-[#34C9B0] focus:outline-none rounded-r-0 rounded-sm focus:border-r-0"
              placeholder="Search Products"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            <button
              className="btn px-6 py-2.5 bg-[#34C9B0] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-[#00020F] hover:shadow-lg focus:bg-[#00020F]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#00020F] active:shadow-lg transition duration-150 ease-in-out flex items-center rounded-l-0"
              type="button"
              id="button-addon2"
              onClick={() => dispatch(setSearchTerm(search))}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>

          <Grid container sx={{ mt: 3 }}>
            {isLoading || !data?.data?.length ? (
              noDataFoundComponent
            ) : (
              <>
                {data?.data?.map((book: any, index: number) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <BooksCard book={book} />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Books
