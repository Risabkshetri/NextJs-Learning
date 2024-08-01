import { NextResponse } from 'next/server'
import { addBook, getBooks } from '../../lib/books'

export async function GET() {
  const books = getBooks()
  return NextResponse.json(books)
}

export async function POST(request) {
  const book = await request.json()
  const newBook = addBook(book)
  return NextResponse.json(newBook, { status: 201 })
}