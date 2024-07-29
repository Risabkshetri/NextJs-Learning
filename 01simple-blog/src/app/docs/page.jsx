import Link from 'next/link';

export default function DocsHomePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      <p className="mb-4">Welcome to our documentation. Please choose a topic:</p>
      <ul className="list-disc pl-5">
        <li><Link href="/docs/getting-started">Getting Started</Link></li>
        <li><Link href="/docs/features/authentication">Authentication</Link></li>
        <li><Link href="/docs/api/endpoints/users">API Endpoints</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}