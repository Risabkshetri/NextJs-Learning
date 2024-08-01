async function getBook(id) {
    const res = await fetch(`https://openlibrary.org/works/${id}.json`)
    if (!res.ok) throw new Error('Failed to fetch book')
        const data = await res.json()
        console.log(data)
        return data
  }
   
  
  export default async function BookPage({ params }) {
   const book = await getBook(params.id)
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-black">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p className="text-gray-600 mb-4">By {book.authors?.[0]?.author?.key  || 'Unknown Author'}</p>
        <p className="mb-4">{book.first_sentence?.value || 'No description available.'}</p>
        <p>First published: {book.first_publish_date || 'Unknown'}</p>
      </div>
    )
  }