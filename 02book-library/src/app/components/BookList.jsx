import BookCard from './BookCard'

export default function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  )
}