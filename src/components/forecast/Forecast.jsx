import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const d = new Date();

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>

      <SimpleGrid columns={7} spacing={50} width="100%">
        {data.list.splice(0, 7).map((item, idx) => (
          <Box
            key={idx}
            width="100%"
            mr={20}
            boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 25px"
          >
            {/* <AccordionItemHeading> */}

            <div className="daily-item">
              <Text></Text>
              <label className="day">{forecastDays[idx]}</label>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={`icons/${item.weather[0].icon}.png`}
                alt="weather"
              />

              <label className="description">
                {item.weather[0].description}
              </label>
              <label className="min-max">
                {Math.round(item.main.temp_max)}°C /
                {Math.round(item.main.temp_min)}°C
              </label>
            </div>

            <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <label>Pressure:</label>
                <label>{item.main.pressure}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Humidity:</label>
                <label>{item.main.humidity}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Clouds:</label>
                <label>{item.clouds.all}%</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Wind speed:</label>
                <label>{item.wind.speed} m/s</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Sea level:</label>
                <label>{item.main.sea_level}m</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Feels like:</label>
                <label>{item.main.feels_like}°C</label>
              </div>
            </div>

            {/* </AccordionItemHeading> */}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Forecast;
