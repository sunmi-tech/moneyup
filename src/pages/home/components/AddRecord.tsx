export default function AddRecord() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 w-full px-30">
        <div className="flex-1">
          <label className="block" htmlFor="date">
            날짜
          </label>
          <input
            className="focus:outline-none border-2 border-gray-100 rounded-md w-full p-1"
            type="date"
            id="date"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="item">항목</label>
          <select
            className="block focus:outline-none border-2 border-gray-100 rounded-md w-full p-1"
            name=""
            id=""
          >
            <option value="1">카카오뱅크</option>
            <option value="2">카카오페이</option>
            <option value="3">토스</option>
            <option value="4">KB스타뱅크</option>
            <option value="5">페이북</option>
            <option value="6">케이뱅크</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block" htmlFor="amount">
            금액
          </label>
          <input
            className="focus:outline-none border-2 border-gray-100 rounded-md w-full p-1"
            type="text"
            id="amount"
          />
        </div>
        <div className="flex-1">
          <label className="block" htmlFor="memo">
            메모
          </label>
          <input
            className="focus:outline-none border-2 border-gray-100 rounded-md w-full p-1"
            type="text"
            id="memo"
          />
        </div>
        <button className="w-1/8 p-1 cursor-pointer bg-amber-200 hover:bg-amber-300 rounded-md text-white font-bold h-[36px] mt-5">
          저장
        </button>
      </div>
    </>
  );
}
