import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchNews } from "../../features/NewsSlice";
import { fetchWeather } from "../../features/WeatherSlice";
import useCountry from "../../hooks/useCountry";

import SearchInput from "../UI/SearchInput";

const languages = ["en", "fr", "de", "it", "es"];

function Header() {
  const [searchTerm, setSearchTerm] = useState("tesla");
  const [lang, setLang] = useState(languages[0]);
  const country = useCountry();

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(lang);
    // dispatch action for news
    dispatch(fetchNews({ searchTerm, lang }));
  }, [searchTerm, lang]);

  useEffect(() => {
    // dispatch action for weather
    dispatch(fetchWeather({ city: country?.city?.toLowerCase() }));
  }, [country]);

  return (
    <header className="py-10 max-w-7xl mx-auto lg:sticky top-0 bg-gray-900 z-50">
      <h1 className="text-center text-white font-medium text-3xl lg:text-6xl">
        News App
      </h1>
      <p className="text-center text-gray-500 font-medium mt-4">
        Find out the latest news around the world
      </p>

      <div className="flex items-center mt-10">
        {/* search-filter */}
        <SearchInput
          placeholder="Search for an article..."
          className="focus:outline-none p-2 text-sm bg-transparent text-white flex-1"
          value={searchTerm}
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />

        <select
          name="language"
          id="language"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-transparent text-white border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-teal-500 ml-auto"
        >
          {languages?.map((item, idx) => (
            <option value={item} key={idx} className="text-black">
              {item}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
