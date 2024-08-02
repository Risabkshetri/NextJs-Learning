let books = []

export function getBooks() {
  return books
}

export function addBook(book) {
  const newBook = { ...book, id: Date.now().toString() }
  books.push(newBook)
  return newBook
}