import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-screen">
            <h1 className="text-5xl font-bold">404 Page Not Found</h1>
            <Link to="/">Kembali Ke Home</Link>
        </div>
    )
}

export default NotFoundPage;