import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={10} display="flex">
      <Box className="weather">
        <div className="top">
          <div>
            <Text className="city">{data.city}</Text>
            <Text className="weather-description">
              {data.weather[0].description}
            </Text>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="bottom">
          <Text className="temperature">{Math.round(data.main.temp)}°C</Text>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">Temperature</span>
              <span className="parameter-value">{data.main.temp}°C</span>
            </div>
          </div>
        </div>
      </Box>

      <Box width={"120%"} m="7">
        <iframe
          title="gmap"
          border-radius="25px"
          name="gMap"
          height="350px"
          width="700px"
          className="gmap_iframe"
          src={`https://maps.google.com/maps?q=${data.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </Box>
    </SimpleGrid>
  );
};

export default CurrentWeather;
