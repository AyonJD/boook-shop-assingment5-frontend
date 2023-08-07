import React from 'react'
import { Card } from '@mui/material'

export interface IBooksCardProps {
  book: {
    _id: string
    title: string
    author: string
    createdAt: string
    updatedAt: string
    __v: number
    genre: string
    publicationYear: number
    publishedBy: object
  }
}

const BooksCard: React.FC<IBooksCardProps> = ({ book }) => {
  return (
    <Card className='book_card'>
      <h1>{book.title}</h1>
    </Card>
  )
}

export default BooksCard
