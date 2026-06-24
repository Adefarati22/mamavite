/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router';

interface State {
  hasError: boolean;
  error?: Error | null;
}

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You could log to an external service here
    // console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-6 text-muted-foreground">An unexpected error occurred. Please try again or return to the homepage.</p>
            <div className="flex gap-4 items-center justify-center">
              <Link to="/" className="rounded-md bg-brown px-4 py-2 text-white">Home</Link>
              <button onClick={() => location.reload()} className="rounded-md border px-4 py-2">Reload</button>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
