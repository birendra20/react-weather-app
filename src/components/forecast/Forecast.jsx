import React from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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

// const d = new Date();

// const date = d.getDate();
// const month = d.getMonth() + 1;
// const year = d.getFullYear();

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Heading mb="5px">Daily ForeCast</Heading>

      <SimpleGrid columns={[1, 2, 3, 4, 7]} spacing={30}>
        {data.list.splice(0, 7).map((item, idx) => (
          <Box
            key={idx}
            boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 25px"
            p={"10px"}
            borderRadius="3xl"
            width={"150px"}
          >
            {/* <AccordionItemHeading> */}

            <div className="daily-item">
              <Text className="day" fontStyle={"bolder"}>
                {forecastDays[idx]}
              </Text>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={`icons/${item.weather[0].icon}.png`}
                alt="weather"
              />

              <Text className="description">{item.weather[0].description}</Text>
              <Text className="min-max">
                {Math.round(item.main.temp_max)}°C /
                {Math.round(item.main.temp_min)}°C
              </Text>
            </div>

            <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <Text>Pressure:{item.main.pressure}</Text>
              </div>
              <div className="daily-details-grid-item">
                <Text>Humidity:{item.main.humidity}</Text>
              </div>
              <div className="daily-details-grid-item">
                <Text>Clouds:{item.clouds.all}%</Text>
              </div>
              <div className="daily-details-grid-item">
                <Text>Wind speed:{item.wind.speed}m/s</Text>
              </div>

              <div className="daily-details-grid-item">
                <Text>Feels like:{item.main.feels_like}°C</Text>
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
