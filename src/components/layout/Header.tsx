import DateSelect from "../UI/DateSelect";
import SearchInput from "../UI/SearchInput";

function Header() {
  return (
    <header className="py-10 max-w-5xl mx-auto">
      <h1 className="text-center text-gray-800 font-bold text-3xl">News App</h1>

      <div className="flex items-center mt-10">
        <SearchInput
          placeholder="Search for an article..."
          className="focus:outline-none p-2 text-sm"
        />

        <div className="ml-auto">
          <DateSelect className="border px-4 py-3 rounded text-center cursor-pointer focus:outline-none focus:border-teal-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;
