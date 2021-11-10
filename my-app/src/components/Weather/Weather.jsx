import React, { useEffect, useState } from 'react';

const Weather = () => {
   const [state, setstate] = useState();
   useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
         const fetchWeather = async () => {
            const res = await fetch(
               `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=14a61b98cbaf5f63931ae063e5ff9999`,
            );
            const result = await res.json();
            console.log(result);
            setstate({
               location: result.name,
               status: result.weather.map(({ description }) => {
                  return description;
               }),
               temp: result.main.temp,
            });
         };
         fetchWeather();
      });
   }, []);

   return (
      <>
         {state ? (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  bottom: '5%',
               }}
            >
               <span> {state.location}</span>
               {state.status.map((s) => (
                  <span>{s}</span>
               ))}
               <span>{state.temp}</span>
            </div>
         ) : "loading"}
      </>
   );
};

export default Weather;
