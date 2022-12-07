import React from "react";

const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select
      onChange={selectHandler}
      className="px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-xl font-normal lg:font-medium outline-none bg-gray-400"
    >
      <option>Filter By Region</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="America">America</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterCountry;
