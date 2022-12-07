import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../util/api";
import { Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  const borders = country.map((country) => country.borders);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="md:min-h-screen pt-10 px-4 md:px-8">
      <button className="bg-slate-700 px-6 py-2 rounded-sm font-medium">
        <Link to="/">
          <ImArrowLeft />
        </Link>
      </button>

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div
          key={index}
          className="lg:flex gap-20 py-10 justify-center items-center"
        >
          <img className="w-[250px] lg:w-2/4 py-10" src={country.flags.png} alt="" />
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-2 uppercase text-gray-200">
              {country.name.common}
            </h3>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold py-2 text-gray-400">
              Population:{" "}
              <span className="font-normal">
                {new Intl.NumberFormat().format(country.population)}
              </span>
            </h5>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold py-2 text-gray-400">
              Region: <span className="font-normal">{country.region}</span>
            </h5>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold py-2 text-gray-400">
              Sub Region:{" "}
              <span className="font-normal">{country.subregion}</span>
            </h5>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-semibold py-2 text-gray-400">
              Capital: <span className="font-normal">{country.capital}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInfo;
