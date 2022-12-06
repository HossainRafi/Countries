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
        className="px-4 py-2 text-xl font-medium outline-none bg-gray-400 placeholder-slate-600"
        type="text"
        placeholder="Enter Country Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
