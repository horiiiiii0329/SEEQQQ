function SearchBar() {
  return (
    <section className="grid grid-cols-2 pt-20 items-center">
      <h3 className="text-3xl font-bold tracking-widest">
        デートプランを検索してみる
      </h3>
      <div className>
        <div className="flex justify-between">
          <input
            type="text"
            className="border-2 border-gray-200 shadow-sm rounded-lg py-2 w-[48%]"
            placeholder="カフェ"
          />
          <input
            type="text"
            className="border-2 border-gray-200 shadow-sm rounded-lg py-2 w-[48%]"
            placeholder="渋谷"
          />
        </div>
        <button className="border-2 border-gray-200 shadow-sm rounded-lg w-full bg-[#FE4A49] font-bold text-white py-2 mt-4">
          検索
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
