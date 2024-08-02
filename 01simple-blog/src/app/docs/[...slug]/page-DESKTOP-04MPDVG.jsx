import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock documentation data (same as before)
const docsData = [
    {
      slug: ['getting-started'],
      title: 'Getting Started',
      content: 'Welcome to our documentation. This guide will help you get started with our product...'
    },
    {
      slug: ['features', 'authentication'],
      title: 'Authentication',
      content: 'Our authentication system uses JWT tokens. Heres how to implement it in your application...'
    },
    {
      slug: ['features', 'database'],
      title: 'Database Integration',
      content: 'Learn how to connect and interact with our database services...'
    },
    {
      slug: ['api', 'endpoints', 'users'],
      title: 'User API Endpoints',
      content: 'Detailed information about user-related API endpoints, including /users/create, /users/update, etc...'
    },
    {
      slug: ['api', 'endpoints', 'products'],
      title: 'Product API Endpoints',
      content: 'Explore the product-related API endpoints, such as /products/list, /products/details, etc...'
    },
    {
      slug: ['troubleshooting'],
      title: 'Troubleshooting',
      content: 'Common issues and their solutions. If youre experiencing problems, start here...'
    }
  ];

export default function DocsPage({ params }) {
  const { slug = [] } = params;
  const currentPath = slug.join('/');
  
  // Handle root /docs path
  if (slug.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="mb-4">Welcome to our documentation. Please choose a topic:</p>
        <ul className="list-disc pl-5">
          {docsData.map((doc, index) => (
            <li key={index}>
              <Link href={`/docs/${doc.slug.join('/')}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const docItem = docsData.find(item => item.slug.join('/') === currentPath);

  if (!docItem) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <nav className="mb-6">
        <ol className="flex space-x-2 text-sm text-gray-500">
          <li><Link href="/docs" className="hover:text-blue-500">Docs</Link></li>
          {slug.map((segment, index) => (
            <li key={index}>
              {' > '}
              <Link href={`/docs/${slug.slice(0, index + 1).join('/')}`} className="hover:text-blue-500">
                {segment}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4">{docItem.title}</h1>
      <div className="prose max-w-none">
        <p>{docItem.content}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Include an empty slug for the root /docs page
  return [{ slug: [] }, ...docsData.map((doc) => ({ slug: doc.slug }))];
}
