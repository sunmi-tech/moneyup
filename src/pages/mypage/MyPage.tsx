export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] w-full">
      <div className="flex flex-col items-center justify-center w-1/4">
        <h1 className="text-2xl font-bold mb-6">마이페이지</h1>
        <div className="flex flex-row w-full items-center gap-2">
          <label className="w-1/4 flex items-center" htmlFor="">
            닉네임
          </label>
          <input
            className="w-full border-2 border-gray-100 rounded-md p-2 focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-row w-full items-center gap-2 mt-2">
          <label className="w-1/4 flex items-center" htmlFor="">
            아이디
          </label>
          <input
            className="w-full border-2 border-gray-100 rounded-md p-2 focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-row w-full items-center gap-2 mt-2">
          <label className="w-1/4 flex items-center" htmlFor="">
            비밀번호
          </label>
          <button className="cursor-pointer w-full bg-amber-200 hover:bg-amber-300 rounded-md p-2 text-white font-bold">
            비밀번호 변경
          </button>
        </div>
      </div>
      <button className="underline mt-5 cursor-pointer">회원탈퇴</button>
    </div>
  );
}
