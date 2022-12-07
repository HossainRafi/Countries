import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-xl font-normal lg:font-medium outline-none bg-gray-400 placeholder-slate-600 rounded-[5px]"
        type="text"
        placeholder="Enter Country Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
