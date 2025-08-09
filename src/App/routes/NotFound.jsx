import { Link } from '@tanstack/react-router';

const NotFound = () => {
  return (
    <article className="flex flex-col items-center justify-center mt-[35vh]">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-lg mb-6">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Go Home
      </Link>
    </article>
  );
};

export default NotFound;
