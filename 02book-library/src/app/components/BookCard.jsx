import Link from 'next/link'

export default function BookCard({ book }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-black">
      <h2 className="text-xl font-semibold mb-2 ">{book.title}</h2>
      <p className="text-gray-600 mb-4">By {book.authors[0]?.name || 'Unknown Author'}</p>
      <Link href={`/books/${book.key.split('/').pop()}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  )
}