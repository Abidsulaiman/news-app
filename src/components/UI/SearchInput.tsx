import { FiSearch } from "react-icons/fi";

function SearchInput({ ...props }) {
  return (
    <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-teal-500">
      <FiSearch className="text-teal-500" />
      <input type="text" {...props} />
    </div>
  );
}

export default SearchInput;
