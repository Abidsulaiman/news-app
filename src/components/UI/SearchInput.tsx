import { FiSearch } from "react-icons/fi";

function SearchInput({ ...props }) {
  return (
    <div className="flex items-center border rounded px-4 py-2 focus-within:border-teal-500">
      <FiSearch className="text-gray-500" />
      <input type="text" {...props} />
    </div>
  );
}

export default SearchInput;
