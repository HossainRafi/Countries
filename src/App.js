import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  return (
    <div className="bg-slate-800">
      <div className="bg-slate-900">
        <h5 className="text-white text-3xl md:text-4xl font-semibold text-center py-4">Countries</h5>
      </div>
      <div className="px-6 md:px-8 lg:px-16">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
