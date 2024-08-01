'use client'

import { useState } from 'react'
import AddBookForm from '../components/AddBookForm'

export default function AddBook() {
  const [message, setMessage] = useState('')

  const handleAddBook = async (bookData) => {
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      })
      if (res.ok) {
        setMessage('Book added successfully!')
      } else {
        setMessage('Failed to add book.')
      }
    } catch (error) {
      setMessage('An error occurred while adding the book.')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add a New Book</h1>
      <AddBookForm onAddBook={handleAddBook} />
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  )
}