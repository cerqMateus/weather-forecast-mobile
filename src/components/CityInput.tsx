import { useEffect, useState } from "react";

import { getCityByCoords } from "@/api/weather";

const CityInput = () => {
  const [cityName, setCityName] = useState<string>("");

  const getCoords = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const city = await getCityByCoords(latitude, longitude);
      setCityName(city.location.name);
    });
  };

  useEffect(() => {
    getCoords();
  }, []);

  return (
    <>
      <p>{cityName}</p>
    </>
  );
};

export default CityInput;
