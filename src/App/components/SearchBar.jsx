import React from "react";

function SearchBar({ setQuery }) {
  const [val, setVal] = React.useState("");

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setQuery(val);
  };
  const handleChangeVal = (e) => {
    setVal(e.target.value);
    !e.target.value && setQuery("");
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmitQuery}
      className="flex gap-x-2 h-8 mb-6"
    >
      <input
        value={val}
        type="search"
        onChange={handleChangeVal}
        aria-label="Search by name"
        placeholder="Search by name"
        className="min-w-[100px] flex-1 outline-none pl-3 pr-2 rounded border border-gray-400 dark:border-transparent placeholder:font-medium placeholder:text-sm"
      />
      <button
        type="submit"
        className="px-6 rounded text-white font-medium bg-green-500 dark:bg-green-600 hover:opacity-80"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
