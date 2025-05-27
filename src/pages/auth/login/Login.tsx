import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-1/4">
        <h1>
          <img width={100} src={logo} alt="logo" />
        </h1>
        <input
          className="w-full border-2 border-gray-100 rounded-md p-2 focus:outline-none"
          type="text"
          placeholder="아이디"
        />
        <input
          className="w-full border-2 border-gray-100 rounded-md p-2 mt-2 mb-2 focus:outline-none"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <button className="cursor-pointer w-1/4 bg-amber-200 hover:bg-amber-300 rounded-md p-2 text-white font-bold">
        로그인
      </button>
      <div className="mt-4">
        <span className="mr-2">회원이 아니신가요?</span>
        <Link to="/signup" className="underline">회원가입</Link>
      </div>
    </div>
  );
}
