/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const multiFilterBook = (data: any) => {
  const { searchTerm, genre, publicationYear } = data

  const queryParams = {
    searchTerm,
    genre: Array.isArray(genre) ? genre.join(',') : genre,
    publicationYear: Array.isArray(publicationYear)
      ? publicationYear.join(',')
      : publicationYear,
  }

  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== ''
    )
  )

  const queryString = new URLSearchParams(filteredParams).toString()

  return queryString
}
