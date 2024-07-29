import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">
        About Page
      </h1>
      <p className="mt-4 text-xl">
        This is the about page.
      </p>
    </main>
  </div>
  );
}
