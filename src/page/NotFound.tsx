import { Link } from 'react-router';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
        <p className="mb-6 text-muted-foreground">The page you were looking for doesn't exist or has been moved.</p>
        <Link to="/" className="rounded-md bg-brown px-4 py-2 text-white">Go to Home</Link>
      </div>
    </main>
  );
}
