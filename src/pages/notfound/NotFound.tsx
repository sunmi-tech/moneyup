import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">404 Not Found</h1>
            <Link to="/" className="text-amber-400 hover:text-amber-500 mt-5">홈으로 돌아가기</Link>
        </div>
    )
}