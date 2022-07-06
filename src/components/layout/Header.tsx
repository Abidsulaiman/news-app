import axios from "axios";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "../../app/hooks";
import { fetchNews } from "../../features/NewsSlice";
import { fetchWeather } from "../../features/WeatherSlice";
import useCountry from "../../hooks/useCountry";

import SearchInput from "../UI/SearchInput";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const country = useCountry();

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch action
    dispatch(fetchNews({ searchTerm, country: country?.code }));
    dispatch(fetchWeather({ country: country?.name?.toLowerCase() }));
  }, [searchTerm || country]);

  return (
    <header className="py-10 max-w-7xl mx-auto lg:sticky top-0 bg-gray-900 z-50">
      <h1 className="text-center text-white font-medium text-3xl lg:text-6xl">
        News App
      </h1>
      <p className="text-center text-gray-500 font-medium mt-4">
        Find out the latest news around the world
      </p>

      <div className="mt-10">
        {/* search-filter */}
        <SearchInput
          placeholder="Search for an article..."
          className="focus:outline-none p-2 text-sm bg-transparent text-white flex-1"
          value={searchTerm}
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
