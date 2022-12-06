import React from "react";

const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select
      onChange={selectHandler}
      className="py-2 px-2 font-medium text-xl outline-none bg-gray-400"
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
