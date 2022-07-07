import axios from "axios";
import { useEffect, useState } from "react";

function useCountry() {
  const [country, setCountry] = useState({
    name: "",
    code: "",
    city: "",
  });

  useEffect(() => {
    // get current country data
    const getGeoInfo = () => {
      axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          let data = response.data;
          setCountry({
            name: data.country_name,
            code: data.country_code,
            city: data.city,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getGeoInfo();
  }, []);

  return country;
}

export default useCountry;
