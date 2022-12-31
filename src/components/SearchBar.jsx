import React from "react";

function SearchBar({ setQuery }) {
  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.search.value);
  };

  return (
    <form className="flex gap-x-2 h-8 mb-6" onSubmit={handleSubmitQuery}>
      <input
        type="search"
        name="search"
        aria-label="Search by name"
        placeholder="Search by name"
        className="flex-1 outline-none pl-3 pr-2 rounded border border-gray-400 dark:border-transparent placeholder:font-medium placeholder:text-sm"
      />
      <button
        type="submit"
        className="px-6 rounded text-white font-medium bg-green-500 hover:opacity-80"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
