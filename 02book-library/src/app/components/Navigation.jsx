import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">Book Library</Link>
        <div>
          <Link href="/" className="text-white mr-4 hover:underline">Home</Link>
          <Link href="/add-book" className="text-white hover:underline">Add Book</Link>
        </div>
      </div>
    </nav>
  )
}