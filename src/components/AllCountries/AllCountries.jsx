import React, { useState, useEffect } from "react";
import { apiURL } from "../../util/api";
import { Link } from "react-router-dom";
import SearchInput from "../Search/SearchInput";
import FilterCountry from "../FilterCountry/FilterCountry";
const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${apiURL}/region/${regionName}`);

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      <div className="md:flex justify-between text-center py-8">
        <div className="pb-2 md:pb-0">
          <SearchInput onSearch={getCountryByName} />
        </div>

        <div className="pt-2 md:pt-0">
          <FilterCountry onSelect={getCountryByRegion} />
        </div>
      </div>
      {isLoading && !error && (
        <h4 className="py-10 text-center text-3xl text-blue-500">
          Loading........
        </h4>
      )}
      {error && !isLoading && (
        <h4 className="py-10 text-center text-3xl text-red-500">{error}</h4>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-evenly">
        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="bg-slate-700 rounded-md text-center hover:scale-105 duration-500  shadow-xl">
              <img
                className="h-40 w-full rounded-t-md"
                src={country.flags.png}
                alt=""
              />
              <div className="p-3">
                <h3 className="text-2xl font-medium pb-3 uppercase">
                  {country.name.common}
                </h3>
                <h6 className="pb-3 font-medium text-gray-400">
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h6>
                <h6 className="pb-2 font-medium text-gray-400">
                  Capital: {country.capital}
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
