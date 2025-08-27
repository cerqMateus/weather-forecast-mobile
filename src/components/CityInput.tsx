import { ChevronDown, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { getCityByCoords } from "@/api/weather";

import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <p className="text-md font-semibold">
                {cityName || "Unknown Location"}
              </p>
              <ChevronDown className="h-3 w-3" />
            </div>
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
};

export default CityInput;
