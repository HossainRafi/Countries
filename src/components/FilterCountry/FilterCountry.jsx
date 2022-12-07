import React from "react";

const FilterCountry = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select
      onChange={selectHandler}
      className="px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-xl font-normal lg:font-medium outline-none bg-gray-400 rounded-[5px] text-slate-600"
    >
      <option className="text-black">Filter By Region</option>
      <option value="Asia" className="text-black">
        Asia
      </option>
      <option value="Europe" className="text-black">
        Europe
      </option>
      <option value="America" className="text-black">
        America
      </option>
      <option value="Africa" className="text-black">
        Africa
      </option>
      <option value="Oceania" className="text-black">
        Oceania
      </option>
    </select>
  );
};

export default FilterCountry;
