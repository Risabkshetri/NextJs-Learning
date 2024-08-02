import { NextResponse } from 'next/server'
import { addBook, getBooks } from '../../lib/books'
<<<<<<< HEAD
export async function GET(){
  const books = getBooks()
  return NextResponse.json(books)
}
;

export async function POST(request){
=======

export async function GET() {
  const books = getBooks()
  return NextResponse.json(books)
}

export async function POST(request) {
>>>>>>> 7ef07d1f7fde9f349dccfbd22e47450acb220776
  const book = await request.json()
  const newBook = addBook(book)
  return NextResponse.json(newBook, { status: 201 })
}