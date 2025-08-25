import { currentWeather } from "./api/weather";
import { Button } from "./components/ui/button";

const obtainWeatherData = async (q: string) => {
  try {
    const data = await currentWeather(q);
    console.log("Weather data obtained:", data);
  } catch (error) {
    console.error("Error obtaining weather data:", error);
  }
};

function App() {
  return (
    <>
      <p>Informações do tempo:</p>
      <Button onClick={() => obtainWeatherData("London")}>
        ver tempo atual
      </Button>
    </>
  );
}

export default App;
