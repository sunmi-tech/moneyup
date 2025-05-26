import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <header>
                <nav>
                    <ul className="flex justify-between items-center px-30">
                        <li>
                            <Link to="/">
                                <img src={logo} alt="logo" width={100} />
                            </Link>
                        </li>
                        <li>
                            <Link to="login">로그인</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}