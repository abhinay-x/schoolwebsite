import { Component } from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

// Error boundary for class components
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Error page component for displaying errors
export function ErrorPage({ error }) {
  const routeError = useRouteError();
  const err = error || routeError;
  
  let title = 'Something went wrong!';
  let message = 'An unexpected error occurred. Please try again later.';
  let status = 500;

  if (err?.status === 404) {
    title = 'Page Not Found';
    message = 'The page you are looking for does not exist or has been moved.';
    status = 404;
  } else if (err?.status === 401) {
    title = 'Unauthorized';
    message = 'You need to be logged in to access this page.';
    status = 401;
  } else if (err?.status === 403) {
    title = 'Forbidden';
    message = 'You do not have permission to access this page.';
    status = 403;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
            <ExclamationTriangleIcon className="h-10 w-10 text-red-600" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {status} - {title}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {message}
          </p>
          {err?.message && (
            <p className="mt-2 text-sm text-gray-500">
              Error details: {err.message}
            </p>
          )}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
