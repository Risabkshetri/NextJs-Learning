import BookList from './components/BookList'
async function getBooks(){
  const res = await fetch("https://openlibrary.org/subjects/programming.json")
  if(!res.ok) throw new Error('Failed to fetch books')
    return res.json()
}
export default async function Home() {
  const data = await getBooks()
  const books = data.works.slice(0, 10) // Limit to 10 books for this example

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-950">Programming Books</h1>
      <BookList books={books} />
    </div>
  )
}