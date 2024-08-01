import './globals.css'
import Navigation from './components/Navigation.jsx'

export const metadata = {
  title: 'Book Library',
  description: 'A simple book library application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}