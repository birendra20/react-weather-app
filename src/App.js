import "./App.css";
import CurrentWeather from "./components/current-weather/Current-Weather";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY, googleMapAPI } from "./Api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";
import { Box, Divider, SimpleGrid } from "@chakra-ui/react";

// import { Map } from "./components/map/Map";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // const [map, setMap] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // const MapFetch = fetch(
    //   `https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}`
    // );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        // const mapResponse = await response[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        // setMap({ city: searchData.label, ...mapResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log(currentWeather);
  console.log(forecast);
  return (
    <Box className="container" width={"100%"}>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}

      {forecast && <Forecast data={forecast} />}
    </Box>
  );
}

export default App;
