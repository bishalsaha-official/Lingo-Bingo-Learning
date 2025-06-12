import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-6">
            <h1 className="text-7xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="mt-6">
                <button className="btn btn-primary">Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorComponent;