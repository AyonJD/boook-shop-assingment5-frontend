import { useState } from 'react'
import { GENRE_OPTION_ARRAY } from '@/constant'
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

const Books = () => {
  const [genre, setGenre] = useState<string[]>([])
  const { data, isLoading, error } = useGetAllBooksQuery(undefined)
  console.log(data)
  return (
    <Container maxWidth="lg" className="py-20 ">
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className=" py-3 pl-4 pr-3">
            <FormControl fullWidth>
              <div>
                <Autocomplete
                  size="small"
                  className="w-full "
                  multiple
                  freeSolo
                  value={genre}
                  onChange={(event, newValue) => {
                    setGenre(newValue)
                  }}
                  options={GENRE_OPTION_ARRAY}
                  getOptionLabel={option => option}
                  renderTags={() => null}
                  renderInput={params => (
                    <TextField
                      label="Genre"
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        style: { borderColor: '#062c31' },
                      }}
                    />
                  )}
                ></Autocomplete>

                <div style={{ marginTop: '8px' }}>
                  {genre?.map((option, index) => (
                    <Chip
                      key={option}
                      size="small"
                      label={option}
                      onDelete={() => {
                        setGenre(prevValue =>
                          prevValue?.filter(val => val !== option)
                        )
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
      </Grid>
    </Container>
  )
}

export default Books
