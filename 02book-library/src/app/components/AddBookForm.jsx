'use client'

import { useState } from 'react'

export default function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddBook({ title, author })
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block mb-2">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Add Book
      </button>
    </form>
  )
}